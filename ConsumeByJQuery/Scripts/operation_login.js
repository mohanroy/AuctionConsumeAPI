function fnLogin() {
    var errorUser = false;
    var UserID = $('#txtAccountID').val();
    if (UserID == '') {
        errorUser = true;
        $('#UserID_msg').html("required");
        $('#UserID_msg').show();
    } else {
        errorUser = false;
        $('#UserID_msg').html("&nbsp;");
        $('#UserID_msg').show();
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

    if (errorUser == true || errorPassword == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var user = { 'AccountID': $('#txtAccountID').val(), 'Password': $('#txtPassword').val() };
        var DTO = JSON.stringify(user);

        $.ajax({
            url: apiURL + 'login/authenticate',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: 'application/json; charset=utf-8',
            success: function (retval) {
                
                if (retval.Successful) {
                    //$.cookie('act_nekot', retval.Token, { expires: 1, path: '/', domain: '.mydomain.com' });
                    $.cookie('act_nekot', retval.Token, { expires: 1, path: '/' });
                    $.cookie('act_nekot_id', retval.User, { expires: 1, path: '/' });

                    var url = "/default.aspx";
                    $(location).attr('href', url);
                }
            },
            error: function (errorVal) {
                //StatusCode
                //Content
                alert('OOPS!! Failed adding role.');
            }
        });
    }
}

$("[id^=mn_]").removeClass();
$('#mn_Login').addClass("active");