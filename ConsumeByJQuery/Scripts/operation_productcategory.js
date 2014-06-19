function fnList() {
    
    jQuery.support.cors = true;
    
    $.ajax({
        url: apiURL + 'productcategories',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            $(data).each(function (i, item) {
                $('#productcategorydetails').append('<tr><td><a href="#" onclick="fnDetailsID(' + item.ID + ')" title="Details">' + item.ProductCategoryID + '</a></td><td>' + item.ParentProductCategoryID + '</td><td>' + item.DomainID + '</td><td>' + item.StateID + '</td><td><a href="#" onclick="fnUpdateID(' + item.ID + ')" title="Edit">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="fnDelete(' + item.ID + ')" title="Delete">Delete</a></td></tr>');
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Failed listing product category. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}

function fnCreate() {
    var url = "/ProductCategories/Create.aspx";
    $(location).attr('href', url);
}

function fnDetailsID(ID) {
    var url = "/ProductCategories/Details.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnUpdateID(ID) {
    var url = "/ProductCategories/Update.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnADD() {
    var errorProductCategory = false;
    var ProductCategoryID = $('#txtProductCategoryID').val();
    if (ProductCategoryID == '') {
        errorProductCategory = true;
        $('#ProductCategoryID_msg').html("required");
        $('#ProductCategoryID_msg').show();
    } else {
        errorProductCategory = false;
        $('#ProductCategoryID_msg').html("&nbsp;");
        $('#ProductCategoryID_msg').show();
    }

    var errorDomain = false;
    var DomainID = $('#ddlDomain').val();
    if (DomainID == '') {
        errorDomain = true;
        $('#DomainID_msg').html("required");
        $('#DomainID_msg').show();
    } else {
        errorDomain = false;
        $('#DomainID_msg').html("&nbsp;");
        $('#DomainID_msg').show();
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

    if (errorProductCategory == true || errorState == true || errorDomain == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var now = new Date();
        var productcategory = { 'CreatedBy': '1', 'Created': now, 'EditedBy': '1', 'Edited': now, 'ProductCategoryID': $('#txtProductCategoryID').val(), 'State_ID': $('#ddlState').val(), 'Domain_ID': $('#ddlDomain').val(), 'ParentProductCategory_ID': $('#ddlParentProductCategory').val() };
        var DTO = JSON.stringify(productcategory);

        $.ajax({
            url: apiURL + 'productcategories/',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: "application/json; charset=utf-8",
            headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            success: function (data) {
                showAlert('ProductCategory added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding productcategory.', 'alert alert-danger');
            }
        });
    }
}

function fnUpdate() {

    var errorProductCategory = false;
    var ProductCategoryID = $('#txtProductCategoryID').val();
    if (ProductCategoryID == '') {
        errorProductCategory = true;
        $('#ProductCategoryID_msg').html("required");
        $('#ProductCategoryID_msg').show();
    } else {
        errorProductCategory = false;
        $('#ProductCategoryID_msg').html("&nbsp;");
        $('#ProductCategoryID_msg').show();
    }

    var errorDomain = false;
    var DomainID = $('#ddlDomain').val();
    if (DomainID == '') {
        errorDomain = true;
        $('#DomainID_msg').html("required");
        $('#DomainID_msg').show();
    } else {
        errorDomain = false;
        $('#DomainID_msg').html("&nbsp;");
        $('#DomainID_msg').show();
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

    if (errorProductCategory == true || errorState == true || errorDomain == true) {
        return false;
    } else {

        jQuery.support.cors = true;
        var url = apiURL + 'productcategories/' + $('#hdnID').val();
        var now = new Date();
        var productcategory = { "ID": $('#hdnID').val(), "Edited": now, "EditedBy": 1, "ProductCategoryID": $('#txtProductCategoryID').val(), 'State_ID': $('#ddlState').val(), 'Domain_ID': $('#ddlDomain').val(), 'ParentProductCategory_ID': $('#ddlParentProductCategory').val() };
        var DTO = JSON.stringify(productcategory);

        $.ajax({
            url: url,
            type: 'PUT',
            data: DTO,
            headers: { "X-HTTP-Method-Override": "PUT", 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showAlert('ProductCategory updated successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed updating productcategory.', 'alert alert-danger');
            }
        });
    }
}

function fnDelete(ID) {
    jQuery.support.cors = true;

    $.ajax({

        url: apiURL + 'productcategories/' + ID,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            showAlert('ProductCategory deleted successfully.', 'alert alert-success');
            var url = "/ProductCategories/List.aspx";
            $(location).attr('href', url);
        },
        error: function (error) {
            showAlert('OOPS!! Failed deleting productcategory.', 'alert alert-danger');
        }
    });
}

function fnPopulateDropdowns(type) {
    fnPopulateDomains(type);
}

function fnPopulateDomains(type) {

    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'domains/',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $("#ddlDomain").empty().append("<option value=''>-- Select Domain --</option>");
            $(retval).each(function (i, item) {
                $("#ddlDomain").append("<option value='" + item.ID + "'>" + item.DomainID + "</option>");
            });

            fnPopulateParentCategories(type);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting domain details.', 'alert alert-danger');
        }
    });
}

function fnPopulateParentCategories(type) {

    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'productcategories/parentcategories/',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $("#ddlParentCategory").empty().append("<option value='0'>-- Select Parent Category --</option>");
            $(retval).each(function (i, item) {
                $("#ddlParentCategory").append("<option value='" + item.ID + "'>" + item.ProductCategoryID + "</option>");
            });

            fnPopulateStates(type);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting parent category details.', 'alert alert-danger');
        }
    });
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

            if (type == 1)
                fnDetailsUpdate();
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting state details.', 'alert alert-danger');
        }
    });
}

function fnDetailsUpdate() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'productcategories/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#txtProductCategoryID').val(retval[0].ProductCategoryID);
            $("#ddlParentCategory").val(retval[0].ParentProductCategory_ID);
            $("#ddlDomain").val(retval[0].Domain_ID);
            $("#ddlState").val(retval[0].State_ID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting productcategory details.', 'alert alert-danger');
        }
    });
}

function fnDetails() {
    jQuery.support.cors = true;
    
    $.ajax({
        url: apiURL + 'productcategories/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblProductCategoryID').text(retval[0].ProductCategoryID);
            $('#lblDomainID').text(retval[0].DomainID);
            $('#lblParentCategoryID').text(retval[0].ParentProductCategoryID);
            $("#lblStateID").text(retval[0].StateID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting productcategory details.', 'alert alert-danger');
        }
    });
}

function fnBacktoList() {
    var url = "/ProductCategories/List.aspx";
    $(location).attr('href', url);
}

$("[id^=mn_]").removeClass();
$('#mn_Setup').addClass("active");