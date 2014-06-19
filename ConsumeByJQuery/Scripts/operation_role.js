function fnList() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'roles',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            $(data).each(function (i, item) {
                $('#roledetails').append('<tr><td><a href="#" onclick="fnDetailsID(' + item.ID + ')" title="Details">' + item.RoleID + '</a></td><td>' + item.States.StateID + '</td><td><a href="#" onclick="fnUpdateID(' + item.ID + ')" title="Edit">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="fnDelete(' + item.ID + ')" title="Delete">Delete</a></td></tr>');
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Failed listing role. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}

function fnCreate() {
    var url = "/Roles/Create.aspx";
    $(location).attr('href', url);
}

function fnDetailsID(ID) {
    var url = "/Roles/Details.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnUpdateID(ID) {
    var url = "/Roles/Update.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnADD() {
    var errorRole = false;
    var RoleID = $('#txtRoleID').val();
    if (RoleID == '') {
        errorRole = true;
        $('#RoleID_msg').html("required");
        $('#RoleID_msg').show();
    } else {
        errorRole = false;
        $('#RoleID_msg').html("&nbsp;");
        $('#RoleID_msg').show();
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

    if (errorRole == true ||errorState == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var now = new Date();
        var role = { 'Created': now, 'Edited': now, 'RoleID': $('#txtRoleID').val(), 'State_ID': $('#ddlState').val() };
        var DTO = JSON.stringify(role);

        $.ajax({
            url: apiURL + 'roles/',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: "application/json; charset=utf-8",
            headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            success: function (data) {
                showAlert('Role added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding role.', 'alert alert-danger');
            }
        });
    }
}

function fnUpdate() {

    var errorRole = false;
    var RoleID = $('#txtRoleID').val();
    if (RoleID == '') {
        errorRole = true;
        $('#RoleID_msg').html("required");
        $('#RoleID_msg').show();
    } else {
        errorRole = false;
        $('#RoleID_msg').html("&nbsp;");
        $('#RoleID_msg').show();
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

    if (errorRole == true || errorState == true) {
        return false;
    } else {

        jQuery.support.cors = true;
        var url = apiURL + 'Roles/' + $('#hdnID').val();
        var now = new Date();
        var role = { "ID": $('#hdnID').val(), "Edited": now, "RoleID": $('#txtRoleID').val(), 'State_ID': $('#ddlState').val() };
        var DTO = JSON.stringify(role);

        $.ajax({
            url: url,
            type: 'PUT',
            data: DTO,
            headers: { "X-HTTP-Method-Override": "PUT", 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showAlert('Role updated successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed updating role.', 'alert alert-danger');
            }
        });
    }
}

function fnDelete(ID) {
    jQuery.support.cors = true;

    $.ajax({

        url: apiURL + 'Roles/' + ID,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            showAlert('Role deleted successfully.', 'alert alert-success');
            var url = "/Roles/List.aspx";
            $(location).attr('href', url);
        },
        error: function (error) {
            showAlert('OOPS!! Failed deleting role.', 'alert alert-danger');
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
        url: apiURL + 'roles/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#txtRoleID').val(retval[0].RoleID);
            $("#ddlState").val(retval[0].State_ID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting role details.', 'alert alert-danger');
        }
    });        
}

function fnDetails() {
    jQuery.support.cors = true;
    
    $.ajax({
        url: apiURL + 'roles/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblRoleID').text(retval[0].RoleID);
            $("#lblStateID").text(retval[0].States.StateID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting role details.', 'alert alert-danger');
        }
    });
}

function fnBacktoList() {
    var url = "/Roles/List.aspx";
    $(location).attr('href', url);
}

$("[id^=mn_]").removeClass();
$('#mn_Setup').addClass("active");