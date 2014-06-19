function showAlert(message, cssclass) {
    if (message != null) {
        $('#alert').html(message);
    }
    if (cssclass != null) {
        $('#alert').addClass(cssclass);
    }
    $('#alert').fadeIn('slow', function () {
        $('#alert').delay(3000).slideUp('slow');
        $('#alert').delay(3000).fadeOut('slow', function () {
            if (cssclass != null) {
                $('#alert').removeClass(cssclass);
            }
        });
    });
}

$(document).ready(function () {
    showAlert();
});