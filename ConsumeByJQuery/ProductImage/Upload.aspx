<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Upload.aspx.cs" Inherits="ConsumeByJQuery.ProductImage.Upload" %>

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
</head>
<body onload="fnProductDetails();">
    <form id="UploadImage" runat="server"  enctype="multipart/form-data">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;Upload Image : <label id="lblProductID" /></legend>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="fileImage">Select Image</label>
                                <div class="col-md-10">
                                    <input name="file" type="file" multiple="multiple" />
                                    <span class='error_field' id='ProductID_msg'>&nbsp;</span>
                                </div>
                                <br /><br />
                                <input type="hidden" id="hdnID" name="hdnID" runat="server" />
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="btnCreate"></label>
                                <div class="col-md-10">
                                    <br />
                                    <input id="btnCreate" type="button" value="Upload" onclick="fnUploadImage();" class="btn btn-default" />
                                    <a class="btn btn-danger" onclick="fnBacktoImageList();">Back to Image List</a>
                                    <br />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12">
                                    <br />
                                    <header id="alert">
                                        <div id="dvMessage"></div>
                                    </header>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />

    </form>
    <script src="../Scripts/operation_productimage.js"></script>

</body>
</html>
