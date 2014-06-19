function fnRegister() {
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



    if (errorUser == true || errorPassword == true || errorCPassword == true) {
        return false;
    } else {

        jQuery.support.cors = true;

        var role = { 'Email': $('#txtAccountID').val(), 'Password': $('#txtPassword').val(), 'ConfirmPassword': $('#txtConfirmPassword').val() };
        var DTO = JSON.stringify(role);

        $.ajax({
            url: apiURL + 'Account/Register',
            type: 'POST',
            dataType: 'json',
            data: DTO,
            contentType: 'application/json; charset=utf-8',
            success: function (retval) {
                alert(retval);                
            },
            error: function (error) {
                alert('OOPS!! User registration failed.');
            }
        });
    }
}