function fnList() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'products',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            $(data).each(function (i, item) {
                $('#productdetails').append('<tr><td><a href="#" onclick="fnDetailsID(' + item.ID + ')" title="Details">' + item.ProductID + '</a></td><td>' + item.ProductCategories.ProductCategoryID + '</td><td>' + item.Accounts.AccountID + '</td><td>' + item.States.StateID + '</td><td><a href="#" onclick="fnImage(' + item.ID + ')" title="Delete">Image</a></td><td><a href="#" onclick="fnUpdateID(' + item.ID + ')" title="Edit">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="fnDelete(' + item.ID + ')" title="Delete">Delete</a></td></tr>');
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Failed listing product. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}

function fnCreate() {
    var url = "/Products/Create.aspx";
    $(location).attr('href', url);
}

function fnDetailsID(ID) {
    var url = "/Products/Details.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnUpdateID(ID) {
    var url = "/Products/Update.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnADD() {
    var errorProduct = false;
    var ProductID = $('#txtProductID').val();
    if (ProductID == '') {
        errorProduct = true;
        $('#ProductID_msg').html("required");
        $('#ProductID_msg').show();
    } else {
        errorProduct = false;
        $('#ProductID_msg').html("&nbsp;");
        $('#ProductID_msg').show();
    }

    var errorDescription = false;
    var Description = $('#txtDescription').val();
    if (Description == '') {
        errorDescription = true;
        $('#Description_msg').html("required");
        $('#Description_msg').show();
    } else {
        errorDescription = false;
        $('#Description_msg').html("&nbsp;");
        $('#Description_msg').show();
    }

    var errorMinimalPrice = false;
    var MinimalPrice = $('#txtMinimalPrice').val();
    if (MinimalPrice == '') {
        errorMinimalPrice = true;
        $('#MinimalPrice_msg').html("required");
        $('#MinimalPrice_msg').show();
    } else {
        errorMinimalPrice = false;
        $('#MinimalPrice_msg').html("&nbsp;");
        $('#MinimalPrice_msg').show();
    }

    var errorAskingPrice = false;
    var AskingPrice = $('#txtAskingPrice').val();
    if (AskingPrice == '') {
        errorAskingPrice = true;
        $('#AskingPrice_msg').html("required");
        $('#AskingPrice_msg').show();
    } else {
        errorAskingPrice = false;
        $('#AskingPrice_msg').html("&nbsp;");
        $('#AskingPrice_msg').show();
    }

    var errorAvailableFrom = false;
    var AvailableFrom = $('#txtAvailableFrom').val();
    if (AvailableFrom == '') {
        errorAvailableFrom = true;
        $('#AvailableFrom_msg').html("required");
        $('#AvailableFrom_msg').show();
    } else {
        errorAvailableFrom = false;
        $('#AvailableFrom_msg').html("&nbsp;");
        $('#AvailableFrom_msg').show();
    }

    var errorAvailableUntil = false;
    var AvailableUntil = $('#txtAvailableUntil').val();
    if (AvailableUntil == '') {
        errorAvailableUntil = true;
        $('#AvailableUntil_msg').html("required");
        $('#AvailableUntil_msg').show();
    } else {
        errorAvailableUntil = false;
        $('#AvailableUntil_msg').html("&nbsp;");
        $('#AvailableUntil_msg').show();
    }

    var errorState = false;
    var StateID = $('#ddlState').val();
    if (StateID == '') {
        errorState = true;
        $('#StateID_msg').html("required");
        $('#StateID_msg').show();
    } else {
        errorState = false;
        $('#StateID_msg').html("&nbsp;");
        $('#StateID_msg').show();
    }

    var errorProductCategory = false;
    var ProductCategoryID = $('#ddlProductCategory').val();
    if (ProductCategoryID == '') {
        errorProductCategory = true;
        $('#ProductCategoryID_msg').html("required");
        $('#ProductCategoryID_msg').show();
    } else {
        errorProductCategory = false;
        $('#ProductCategoryID_msg').html("&nbsp;");
        $('#ProductCategoryID_msg').show();
    }

    if (errorProduct == true || errorState == true || errorProductCategory == true || errorDescription == true || errorMinimalPrice == true || errorAskingPrice == true || errorAvailableFrom == true || errorAvailableUntil == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var now = new Date();
        var product =
            {
                'Created': now,
                'Edited': now,
                'ProductID': $('#txtProductID').val(),
                'ShortDescription': $('#txtShortDescription').val(),
                'Description': $('#txtDescription').val(),
                'BrandName': $('#txtBrandName').val(),
                'SerialNumber': $('#txtSerialNumber').val(),
                'Unit': $('#txtUnit').val(),
                'Weight': $('#txtWeight').val(),
                'MinimalPrice': $('#txtMinimalPrice').val(),
                'AskingPrice': $('#txtAskingPrice').val(),
                'AvailableFrom': parseStringToDate($('#txtAvailableFrom').val()),
                'AvailableUntil': parseStringToDate($('#txtAvailableUntil').val()),
                'ProductCategory_ID': $('#ddlProductCategory').val(),
                'State_ID': $('#ddlState').val()
            };

        var DTO = JSON.stringify(product);

        $.ajax({
            url: apiURL + 'products/',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: "application/json; charset=utf-8",
            headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            success: function (data) {
                showAlert('Product added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding product.', 'alert alert-danger');
            }
        });
    }
}

function fnUpdate() {

    var errorProduct = false;
    var ProductID = $('#txtProductID').val();
    if (ProductID == '') {
        errorProduct = true;
        $('#ProductID_msg').html("required");
        $('#ProductID_msg').show();
    } else {
        errorProduct = false;
        $('#ProductID_msg').html("&nbsp;");
        $('#ProductID_msg').show();
    }

    var errorDescription = false;
    var Description = $('#txtDescription').val();
    if (Description == '') {
        errorDescription = true;
        $('#Description_msg').html("required");
        $('#Description_msg').show();
    } else {
        errorDescription = false;
        $('#Description_msg').html("&nbsp;");
        $('#Description_msg').show();
    }

    var errorMinimalPrice = false;
    var MinimalPrice = $('#txtMinimalPrice').val();
    if (MinimalPrice == '') {
        errorMinimalPrice = true;
        $('#MinimalPrice_msg').html("required");
        $('#MinimalPrice_msg').show();
    } else {
        errorMinimalPrice = false;
        $('#MinimalPrice_msg').html("&nbsp;");
        $('#MinimalPrice_msg').show();
    }

    var errorAskingPrice = false;
    var AskingPrice = $('#txtAskingPrice').val();
    if (AskingPrice == '') {
        errorAskingPrice = true;
        $('#AskingPrice_msg').html("required");
        $('#AskingPrice_msg').show();
    } else {
        errorAskingPrice = false;
        $('#AskingPrice_msg').html("&nbsp;");
        $('#AskingPrice_msg').show();
    }

    var errorAvailableFrom = false;
    var AvailableFrom = $('#txtAvailableFrom').val();
    if (AvailableFrom == '') {
        errorAvailableFrom = true;
        $('#AvailableFrom_msg').html("required");
        $('#AvailableFrom_msg').show();
    } else {
        errorAvailableFrom = false;
        $('#AvailableFrom_msg').html("&nbsp;");
        $('#AvailableFrom_msg').show();
    }

    var errorAvailableUntil = false;
    var AvailableUntil = $('#txtAvailableUntil').val();
    if (AvailableUntil == '') {
        errorAvailableUntil = true;
        $('#AvailableUntil_msg').html("required");
        $('#AvailableUntil_msg').show();
    } else {
        errorAvailableUntil = false;
        $('#AvailableUntil_msg').html("&nbsp;");
        $('#AvailableUntil_msg').show();
    }

    var errorState = false;
    var StateID = $('#ddlState').val();
    if (StateID == '') {
        errorState = true;
        $('#StateID_msg').html("required");
        $('#StateID_msg').show();
    } else {
        errorState = false;
        $('#StateID_msg').html("&nbsp;");
        $('#StateID_msg').show();
    }

    var errorProductCategory = false;
    var ProductCategoryID = $('#ddlProductCategory').val();
    if (ProductCategoryID == '') {
        errorProductCategory = true;
        $('#ProductCategoryID_msg').html("required");
        $('#ProductCategoryID_msg').show();
    } else {
        errorProductCategory = false;
        $('#ProductCategoryID_msg').html("&nbsp;");
        $('#ProductCategoryID_msg').show();
    }

    if (errorProduct == true || errorState == true || errorProductCategory == true || errorDescription == true || errorMinimalPrice == true || errorAskingPrice == true || errorAvailableFrom == true || errorAvailableUntil == true) {
        return false;
    } else {

        jQuery.support.cors = true;
        var url = apiURL + 'products/' + $('#hdnID').val();
        var now = new Date();
        var product =
            {
                'ID': $('#hdnID').val(),
                'Edited': now,
                'ProductID': $('#txtProductID').val(),
                'ShortDescription': $('#txtShortDescription').val(),
                'Description': $('#txtDescription').val(),
                'BrandName': $('#txtBrandName').val(),
                'SerialNumber': $('#txtSerialNumber').val(),
                'Unit': $('#txtUnit').val(),
                'Weight': $('#txtWeight').val(),
                'MinimalPrice': $('#txtMinimalPrice').val(),
                'AskingPrice': $('#txtAskingPrice').val(),
                'AvailableFrom': parseStringToDate($('#txtAvailableFrom').val()),
                'AvailableUntil': parseStringToDate($('#txtAvailableUntil').val()),
                'ProductCategory_ID': $('#ddlProductCategory').val(),
                'State_ID': $('#ddlState').val()
            };

        var DTO = JSON.stringify(product);

        $.ajax({
            url: url,
            type: 'PUT',
            data: DTO,
            headers: { "X-HTTP-Method-Override": "PUT", 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showAlert('Product updated successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed updating product.', 'alert alert-danger');
            }
        });
    }
}

function fnDelete(ID) {
    jQuery.support.cors = true;

    $.ajax({

        url: apiURL + 'products/' + ID,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            showAlert('Product deleted successfully.', 'alert alert-success');
            var url = "/Products/List.aspx";
            $(location).attr('href', url);
        },
        error: function (error) {
            showAlert('OOPS!! Failed deleting product.', 'alert alert-danger');
        }
    });
}

function fnPopulateDropdowns(type) {
    fnPopulateStates(type);
}

function fnPopulateStates(type) {

    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'states/',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $("#ddlState").empty().append("<option value=''>-- Select State --</option>");
            $(retval).each(function (i, item) {
                $("#ddlState").append("<option value='" + item.ID + "'>" + item.StateID + "</option>");
            });

            fnPopulateProductCategories(type);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting state details.', 'alert alert-danger');
        }
    });
}

function fnPopulateProductCategories(type) {

    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'productcategories/',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $("#ddlProductCategory").empty().append("<option value=''>-- Select Product Category --</option>");
            $(retval).each(function (i, item) {
                $("#ddlProductCategory").append("<option value='" + item.ID + "'>" + item.ProductCategoryID + "</option>");
            });

            if (type == 1)
                fnDetailsUpdate();
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting product category details.', 'alert alert-danger');
        }
    });
}

function fnDetailsUpdate() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'products/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#txtProductID').val(retval[0].ProductID);
            $('#txtShortDescription').val(retval[0].ShortDescription);
            $('#txtDescription').val(retval[0].Description);
            $('#txtBrandName').val(retval[0].BrandName);
            $('#txtSerialNumber').val(retval[0].SerialNumber);
            $('#txtUnit').val(retval[0].Unit);
            $('#txtWeight').val(retval[0].Weight);
            $('#txtMinimalPrice').val(retval[0].MinimalPrice);
            $('#txtAskingPrice').val(retval[0].AskingPrice);
            $('#txtAvailableFrom').val(parseDate(retval[0].AvailableFrom));
            $('#txtAvailableUntil').val(parseDate(retval[0].AvailableUntil));
            $('#ddlState').val(retval[0].State_ID);
            $('#ddlProductCategory').val(retval[0].ProductCategory_ID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting product details.', 'alert alert-danger');
        }
    });
}

function fnDetails() {
    jQuery.support.cors = true;
    
    $.ajax({
        url: apiURL + 'products/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblProductID').text(retval[0].ProductID);
            $('#lblShortDescription').text(retval[0].ShortDescription);
            $('#lblDescription').text(retval[0].Description);
            $('#lblBrandName').text(retval[0].BrandName);
            $('#lblSerialNumber').text(retval[0].SerialNumber);
            $('#lblUnit').text(retval[0].Unit);
            $('#lblWeight').text(retval[0].Weight);
            $('#lblMinimalPrice').text(retval[0].MinimalPrice);
            $('#lblAskingPrice').text(retval[0].AskingPrice);
            $('#lblAvailableFrom').text(parseDate(retval[0].AvailableFrom));
            $('#lblAvailableUntil').text(parseDate(retval[0].AvailableUntil));
            $('#lblState').text(retval[0].States.StateID);
            $('#lblProductCategory').text(retval[0].ProductCategories.ProductCategoryID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting product details.', 'alert alert-danger');
        }
    });
}

function fnBacktoList() {
    var url = "/Products/List.aspx";
    $(location).attr('href', url);
}

function fnImage(id) {
    var url = "/ProductImage/Details.aspx?ID=" + id;
    $(location).attr('href', url);
}

$("[id^=mn_]").removeClass();
$('#mn_Products').addClass("active");
