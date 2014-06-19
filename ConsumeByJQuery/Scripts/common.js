$.support.cors = true;

var apiURL = "http://localhost:19454/api/";//"http://auctionapi.azurewebsites.net/api/"
var tokenURL = "http://localhost:5977/Token";


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

function parseDate(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;
}

function parseStringToDate(dateObject) {
    var date = new Date(dateObject);
    return date;
}
