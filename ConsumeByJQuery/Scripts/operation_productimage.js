
function fnUploadImage() {    

    jQuery.support.cors = true;
    var formData = new FormData($('form')[0]);

    $.ajax({
        url: apiURL + 'ProductImages/UploadImage/' + $('#hdnID').val(),
        type: 'POST',        
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (results) {
            showAlert('Image uploaded successfully.', 'alert alert-success');
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Error uploading image. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}


function fnShowImage() {    

    var getImageURL = apiURL + 'ProductImages/GetImage/';
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'ProductImages/ListImages/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblProductID').text(retval[0].ProductID);            
            $("#imgContainer").empty();
            if (retval[0].ImageFileName != '') {
                for (var i = 0; i < retval.length; i++) {
                    $("#imgContainer").append("<div class='col-lg-3 col-md-4 col-xs-6 thumb'><a class='thumbnail' href='#'><img class='img-responsive' src='" + getImageURL + retval[i].ID + "' /></a></div>");
                }
            }
            else {
                showAlert('OOPS!! No image found for productid: ' + retval[0].ProductID, 'alert alert-danger');
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            showAlert('OOPS!! Error geting image. <br />' + errorThrown + xhr.responseText, 'alert alert-danger');
        }
    });
}

function fnProductDetails() {
    jQuery.support.cors = true;

    $.ajax({
        url: apiURL + 'products/' + $('#hdnID').val(),
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: { 'X-Token': $.cookie('act_nekot'), 'X-TokenID': $.cookie('act_nekot_id') },
        success: function (retval) {
            $('#lblProductID').text(retval[0].ProductID);
        },
        error: function (error) {
            showAlert('OOPS!! Failed geting role details.', 'alert alert-danger');
        }
    });
}

function fnUpload()
{
    var url = "/ProductImage/Upload.aspx?ID=" + $('#hdnID').val();
    $(location).attr('href', url);
}

function fnBacktoList() {
    var url = "/Products/List.aspx";
    $(location).attr('href', url);
}

function fnBacktoImageList() {
    var url = "/ProductImage/Details.aspx?ID=" + $('#hdnID').val();
    $(location).attr('href', url);
}

$("[id^=mn_]").removeClass();
$('#mn_Products').addClass("active");