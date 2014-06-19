function fnList() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'domains',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            $(data).each(function (i, item) {
                $('#domaindetails').append('<tr><td><a href="#" onclick="fnDetailsID(' + item.ID + ')" title="Details">' + item.DomainID + '</a></td><td>' + item.States.StateID + '</td><td><a href="#" onclick="fnUpdateID(' + item.ID + ')" title="Edit">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="fnDelete(' + item.ID + ')" title="Delete">Delete</a></td></tr>');
            });
        },
        error: function (error) {
            showAlert('OOPS!! Failed listing state.', 'alert alert-danger');
        }
    });
}

function fnCreate() {
    var url = "/Domains/Create.aspx";
    $(location).attr('href', url);
}

function fnDetailsID(ID) {
    var url = "/Domains/Details.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnUpdateID(ID) {
    var url = "/Domains/Update.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnADD() {
    var errorDomain = false;
    var DomainID = $('#txtDomainID').val();
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

    if (errorDomain == true || errorState == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var now = new Date();
        var domain = { 'CreatedBy': '1', 'Created': now, 'EditedBy': '1', 'Edited': now, 'DomainID': $('#txtDomainID').val(), 'State_ID': $('#ddlState').val() };
        var DTO = JSON.stringify(domain);

        $.ajax({
            url: apiURL + 'Domains/',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: "application/json; charset=utf-8",
            headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            success: function (data) {
                showAlert('Domain added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding domain.', 'alert alert-danger');
            }
        });
    }
}

function fnUpdate() {

    var errorDomain = false;
    var DomainID = $('#txtDomainID').val();
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

    if (errorDomain == true || errorState == true) {
        return false;
    } else {

        jQuery.support.cors = true;
        var url = apiURL + 'Domains/' + $('#hdnID').val();
        var now = new Date();
        var domain = { "ID": $('#hdnID').val(), "Edited": now, "EditedBy": 1, "DomainID": $('#txtDomainID').val(), 'State_ID': $('#ddlState').val() };
        var DTO = JSON.stringify(domain);

        $.ajax({
            url: url,
            type: 'PUT',
            data: DTO,
            headers: { "X-HTTP-Method-Override": "PUT", 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showAlert('Domain updated successfully.', 'alert alert-success');
            },
            error: function (xhr, textStatus, errorThrown) {
                showAlert('OOPS!! Failed listing domain. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
            }
        });
    }
}

function fnDelete(ID) {
    jQuery.support.cors = true;

    $.ajax({

        url: apiURL + 'Domains/' + ID,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            showAlert('Domain deleted successfully.', 'alert alert-success');
            var url = "/Domains/List.aspx";
            $(location).attr('href', url);
        },
        error: function (error) {
            showAlert('OOPS!! Failed deleting domain.', 'alert alert-danger');
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

            if (type ==1)
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
        url: apiURL + 'domains/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#txtDomainID').val(retval[0].DomainID);
            $("#ddlState").val(retval[0].State_ID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting domain details.', 'alert alert-danger');
        }
    });
}

function fnDetails() {
    jQuery.support.cors = true;
    
    $.ajax({
        url: apiURL + 'domains/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblDomainID').text(retval[0].DomainID);
            $("#lblStateID").text(retval[0].States.StateID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting domain details.', 'alert alert-danger');
        }
    });

}

function fnBacktoList() {
    var url = "/Domains/List.aspx";
    $(location).attr('href', url);
}

$("[id^=mn_]").removeClass();
$('#mn_Setup').addClass("active");