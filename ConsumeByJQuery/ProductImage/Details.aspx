<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Details.aspx.cs" Inherits="ConsumeByJQuery.ProductImage.Details" %>

<%@ Register Src="~/Controls/headerelements.ascx" TagName="headerelements" TagPrefix="uc1" %>
<%@ Register Src="~/Controls/menu.ascx" TagName="menu" TagPrefix="uc2" %>
<%@ Register Src="~/Controls/footer.ascx" TagName="footer" TagPrefix="uc3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <uc1:headerelements ID="headerelements1" runat="server" />

    <meta content="" name="description" />
    <meta content="" name="author" />
    <title>Auction :: Consume API</title>
    <link href="../Styles/Custom/thumbnail-gallery.css" rel="stylesheet" type="text/css" />
</head>
<body onload="fnShowImage();">
    <form id="UploadImage" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row">
                <div class="col-lg-12 page-header" style="margin-bottom:20px;">
                    <div style="width:80%; float:left;">
                        <h3 style="margin-bottom:-5px;">Product Images : <label id="lblProductID" /></h3>
                    </div>
                    <div style="float:left;">
                        <a class="btn btn-default" onclick="fnUpload();">Upload New</a>
                        <a class="btn btn-danger" onclick="fnBacktoList();">Back to List</a>
                    </div>
                </div>
                
                <div id="imgContainer"></div>

                <div class="col-lg-12">
                    <br />
                    <input type="hidden" id="hdnID" name="hdnID" runat="server" />
                    
                    <br />
                </div>

                <div class="col-md-12">
                    <br />
                    <header id="alert">
                        <div id="dvMessage"></div>
                    </header>
                </div>
            </div>
        </div>
        
        <uc3:footer ID="footer1" runat="server" />

    </form>
    <script src="../Scripts/operation_productimage.js"></script>

</body>
</html>
