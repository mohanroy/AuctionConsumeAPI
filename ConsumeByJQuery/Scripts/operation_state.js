function fnList() {
    
    jQuery.support.cors = true;
      
    $.ajax({
        url: apiURL + 'states',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            $(data).each(function (i, item) {
                $('#statedetails').append('<tr><td><a href="#" onclick="fnDetailsID(' + item.ID + ')" title="Details">' + item.StateID + '</a></td><td><a href="#" onclick="fnUpdateID(' + item.ID + ')" title="Edit">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="fnDelete(' + item.ID + ')" title="Delete">Delete</a></td></tr>');
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Failed listing state. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}

function fnCreate() {
    var url = "/States/Create.aspx";
    $(location).attr('href', url);
}

function fnDetailsID(ID) {
    var url = "/States/Details.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnUpdateID(ID) {
    var url = "/States/Update.aspx?ID=" + ID;
    $(location).attr('href', url);
}

function fnADD() {
    
    var errorState = false;
    var StateID = $('#txtStateID').val();
    if (StateID == '') {
        errorState = true;
        $('#StateID_msg').html("required");
        $('#StateID_msg').show();
    } else {
        errorState = false;
        $('#StateID_msg').html("&nbsp;");
        $('#StateID_msg').show();
    }

    if (errorState == true) {
        return false;
    } else {
        jQuery.support.cors = true;
        
        var now = new Date();
        //var state = { 'CreatedBy': '1', 'Created': now, 'EditedBy': '1', 'Edited': now, 'StateID': $('#txtStateID').val() };
        var state = { 'Created': now, 'Edited': now, 'StateID': $('#txtStateID').val() };
        var DTO = JSON.stringify(state);

        $.ajax({
            url: apiURL + 'states/',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: "application/json; charset=utf-8",
            headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            success: function (data) {
                showAlert('State added successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed adding state.', 'alert alert-danger');
            }
        });
    }
}

function fnUpdate() {

    var errorState = false;
    var StateID = $('#txtStateID').val();
    if (StateID == '') {
        errorState = true;
        $('#StateID_msg').html("required");
        $('#StateID_msg').show();
    } else {
        errorState = false;
        $('#StateID_msg').html("&nbsp;");
        $('#StateID_msg').show();
    }

    if (errorState == true) {
        return false;
    } else {
        jQuery.support.cors = true;
        var url = apiURL + 'States/' + $('#hdnID').val();
        var now = new Date();
        var state = { "ID": $('#hdnID').val(), "Edited": now, "EditedBy": 1, "StateID": $('#txtStateID').val() };
        var DTO = JSON.stringify(state);

        $.ajax({
            url: url,
            type: 'PUT',
            data: DTO,
            headers: { "X-HTTP-Method-Override": "PUT", 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showAlert('State updated successfully.', 'alert alert-success');
            },
            error: function (error) {
                showAlert('OOPS!! Failed updating state.', 'alert alert-danger');
            }
        });
    }
}

function fnDelete(ID) {
    jQuery.support.cors = true;

    $.ajax({

        url: apiURL + 'states/' + ID,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (data) {
            showAlert('State deleted successfully.', 'alert alert-success');
            var url = "/States/List.aspx";
            $(location).attr('href', url);
        },
        error: function (error) {
            showAlert('OOPS!! Failed deleting state.', 'alert alert-danger');
        }
    });
}

function fnDetailsUpdate() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'states/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#txtStateID').val(retval.StateID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting state details.', 'alert alert-danger');
        }
    });
}

function fnDetails() {
    jQuery.support.cors = true;
    
    $.ajax({
        url: apiURL + 'states/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblStateID').text(retval.StateID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting state details.', 'alert alert-danger');
        }
    });
}

function fnBacktoList() {
    var url = "/States/List.aspx";
    $(location).attr('href', url);
}

$("[id^=mn_]").removeClass();
$('#mn_Setup').addClass("active");