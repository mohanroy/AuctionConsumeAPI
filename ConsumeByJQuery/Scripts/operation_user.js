function fnList() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'accounts',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            $(data).each(function (i, item) {
                $('#productdetails').append('<tr><td><a href="#" onclick="fnDetailsID(' + item.ID + ')" title="Details">' + item.AccountID + '</a></td><td>' + item.Password + '</td><td>' + item.Roles.RoleID + '</td><td>' + item.Domains.DomainID + '</td><td>' + item.States.StateID + '</td><td><a href="#" onclick="fnUpdateID(' + item.ID + ')" title="Edit">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="fnDelete(' + item.ID + ')" title="Delete">Delete</a></td></tr>');
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Failed listing user. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}

function fnCreate() {
    var url = "/Users/Create.aspx";
    $(location).attr('href', url);
}

function fnDetailsID(ID) {
    var url = "/Users/Details.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnUpdateID(ID) {
    var url = "/Users/Update.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnBacktoList() {
    var url = "/Users/List.aspx";
    $(location).attr('href', url);
}

function fnADD() {
    var errorUser = false;
    var UserID = $('#txtAccountID').val();
    if (UserID == '') {
        errorUser = true;
        $('#AccountID_msg').html("required");
        $('#AccountID_msg').show();
    } else {
        errorUser = false;
        $('#AccountID_msg').html("&nbsp;");
        $('#AccountID_msg').show();
    }

    var errorPassword = false;
    var Password = $('#txtPassword').val();
    if (Password == '') {
        errorPassword = true;
        $('#Password_msg').html("required");
        $('#Password_msg').show();
    } else {
        errorPassword = false;
        $('#Password_msg').html("&nbsp;");
        $('#Password_msg').show();
    }

    var errorCPassword = false;
    var CPassword = $('#txtConfirmPassword').val();
    if (Password != CPassword) {
        errorCPassword = true;
        $('#CPassword_msg').html("password don't match");
        $('#CPassword_msg').show();
    } else {
        errorCPassword = false;
        $('#CPassword_msg').html("&nbsp;");
        $('#CPassword_msg').show();
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

    var errorRole = false;
    var RoleID = $('#ddlRole').val();
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

    if (errorUser == true || errorPassword == true || errorCPassword == true || errorDomain == true || errorRole == true || errorState == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var now = new Date();
        var user = {
            'Created': now,
            'Edited': now,
            'AccountID': $('#txtAccountID').val(),
            'Password': $('#txtPassword').val(),            
            'Domain_ID': $('#ddlDomain').val(),
            'Role_ID': $('#ddlRole').val(),
            'State_ID': $('#ddlState').val()
        };
        var DTO = JSON.stringify(user);

        $.ajax({
            url: apiURL + 'accounts/',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: "application/json; charset=utf-8",
            headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            success: function (data) {
                showAlert('User added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding user.', 'alert alert-danger');
            }
        });
    }
}

function fnUpdate() {
    var errorUser = false;
    var UserID = $('#txtAccountID').val();
    if (UserID == '') {
        errorUser = true;
        $('#AccountID_msg').html("required");
        $('#AccountID_msg').show();
    } else {
        errorUser = false;
        $('#AccountID_msg').html("&nbsp;");
        $('#AccountID_msg').show();
    }

    var errorPassword = false;
    var Password = $('#txtPassword').val();
    if (Password == '') {
        errorPassword = true;
        $('#Password_msg').html("required");
        $('#Password_msg').show();
    } else {
        errorPassword = false;
        $('#Password_msg').html("&nbsp;");
        $('#Password_msg').show();
    }

    var errorCPassword = false;
    var CPassword = $('#txtConfirmPassword').val();
    if (Password != CPassword) {
        errorCPassword = true;
        $('#CPassword_msg').html("password don't match");
        $('#CPassword_msg').show();
    } else {
        errorCPassword = false;
        $('#CPassword_msg').html("&nbsp;");
        $('#CPassword_msg').show();
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

    var errorRole = false;
    var RoleID = $('#ddlRole').val();
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

    if (errorUser == true || errorPassword == true || errorCPassword == true || errorDomain == true || errorRole == true || errorState == true) {
        return false;
    } else {

        jQuery.support.cors = true;
        var url = apiURL + 'accounts/' + $('#hdnID').val();
        var now = new Date();
        var user = {
            'ID': $('#hdnID').val(),
            'Edited': now,
            'AccountID': $('#txtAccountID').val(),
            'Password': $('#txtPassword').val(),
            'Domain_ID': $('#ddlDomain').val(),
            'Role_ID': $('#ddlRole').val(),
            'State_ID': $('#ddlState').val()
        };
        var DTO = JSON.stringify(user);

        $.ajax({
            url: url,
            type: 'PUT',
            data: DTO,
            headers: { "X-HTTP-Method-Override": "PUT", 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showAlert('User added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding user.', 'alert alert-danger');
            }
        });
    }
}

function fnDelete(ID) {
    jQuery.support.cors = true;

    $.ajax({

        url: apiURL + 'accounts/' + ID,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            showAlert('User deleted successfully.', 'alert alert-success');
            var url = "/Roles/List.aspx";
            $(location).attr('href', url);
        },
        error: function (error) {
            showAlert('OOPS!! Failed deleting user.', 'alert alert-danger');
        }
    });
}

function fnDetails() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'accounts/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblAccountID').text(retval[0].AccountID);
            $('#lblPassword').text(retval[0].Password);
            $('#lblDomain').text(retval[0].Domains.DomainID);
            $('#lblRole').text(retval[0].Roles.RoleID);
            $('#lblState').text(retval[0].States.StateID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting user details.', 'alert alert-danger');
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

            fnPopulateRoles(type);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting domain details.', 'alert alert-danger');
        }
    });
}

function fnPopulateRoles(type) {

    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'roles/',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $("#ddlRole").empty().append("<option value=''>-- Select Role --</option>");
            $(retval).each(function (i, item) {
                $("#ddlRole").append("<option value='" + item.ID + "'>" + item.RoleID + "</option>");
            });

            fnPopulateStates(type);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting role details.', 'alert alert-danger');
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
        url: apiURL + 'accounts/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#txtAccountID').val(retval[0].AccountID);
            $('#txtPassword').val(retval[0].Password);
            $('#txtConfirmPassword').val(retval[0].Password);
            $('#ddlDomain').val(retval[0].Domain_ID);
            $('#ddlRole').val(retval[0].Role_ID);
            $('#ddlState').val(retval[0].State_ID);            
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting product details.', 'alert alert-danger');
        }
    });
}

$("[id^=mn_]").removeClass();
$('#mn_Users').addClass("active");