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

        //var user = { 'username': $('#txtAccountID').val(), 'Password': $('#txtPassword').val(), 'grant_type': 'password' };
        var user = 'grant_type=password&username=' + $('#txtAccountID').val() + '&password=' + $('#txtPassword').val()
        var DTO = JSON.stringify(user);

        $.ajax({
            url: tokenURL,
            type: 'POST',
            data: user,
            contentType: 'application/x-www-form-urlencoded',
            success: function (retval) {                
                alert(retval.access_token);
                
                    //Create
                    //$.cookie('act_nekot', retval.token, { expires: 1, path: '/', domain: '.mydomain.com' });
                    $.cookie('act_nekot', retval.access_token, { expires: 1, path: '/' });
                    //token_type":"bearer
                    //Access
                    //alert($.cookie('act_nekot'));

                    //Delete
                    //$.removeCookie('act_nekot');

                    //var url = "/default.aspx";
                    //$(location).attr('href', url);
                
            },
            error: function (errorVal) {
                alert(errorVal.error_description);
                alert(errorVal[0]);
                               

                alert('OOPS!! Failed adding role.');
            }
        });
    }
}