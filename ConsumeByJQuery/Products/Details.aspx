<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Details.aspx.cs" Inherits="ConsumeByJQuery.Products.Details" %>

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
<body onload="fnDetails();">
    <form id="DetailsProduct" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <fieldset>

                        <legend>&nbsp;&nbsp;Details Product</legend>

                        <div class="form-group">
                            <label class="col-md-2 control-label" for="lblProductID">ProductID</label>
                            <div class="col-md-10">
                                <label id="lblProductID" name="lblProductID" runat="server" />
                            </div>
                            <br />
                            <br />
                            <label class="col-md-2 control-label" for="lblShortDescription">Short Description</label>
                            <div class="col-md-10">
                                <label id="lblShortDescription" name="lblShortDescription" runat="server" />
                            </div>
                            <br />
                            <br />
                            <label class="col-md-2 control-label" for="lblDescription">Description</label>
                            <div class="col-md-10">
                                <label id="lblDescription" name="lblDescription" runat="server" />
                            </div>
                            <br />
                            <br />
                            <label class="col-md-2 control-label" for="lblBrandName">Brand Name</label>
                            <div class="col-md-10">
                                <label id="lblBrandName" name="lblBrandName" runat="server" />
                            </div>
                            <br />
                            <br />
                            <label class="col-md-2 control-label" for="lblSerialNumber">Serial Number</label>
                            <div class="col-md-10">
                                <label id="lblSerialNumber" name="lblSerialNumber" runat="server" />
                            </div>
                            <br />
                            <br />
                            <label class="col-md-2 control-label" for="lblUnit">Unit</label>
                            <div class="col-md-4">
                                <label id="lblUnit" name="lblUnit" runat="server" />
                            </div>
                            <label class="col-md-2 control-label" for="lblWeight">Weight</label>
                            <div class="col-md-4">
                                <label id="lblWeight" name="lblWeight" runat="server" />
                            </div>
                        </div>
                        <br /><br />
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="lblMinimalPrice">Minimal Price</label>
                            <div class="col-md-4">
                                <label id="lblMinimalPrice" name="lblMinimalPrice" runat="server" />
                            </div>
                            <label class="col-md-2 control-label" for="lblAskingPrice">Asking Price</label>
                            <div class="col-md-4">
                                <label id="lblAskingPrice" name="lblAskingPrice" runat="server" />
                            </div>
                        </div>
                        <br /><br />
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="lblAvailableFrom">Available From</label>
                            <div class="col-md-4">
                                <label id="lblAvailableFrom" name="lblAvailableFrom" runat="server" />
                            </div>
                            <label class="col-md-2 control-label" for="lblAvailableUntil">Available Until</label>
                            <div class="col-md-4">
                                <label id="lblAvailableUntil" name="lblAvailableUntil" runat="server" />                                
                            </div>
                        </div>
                        <br /><br />
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="lblProductCategory">Product Category</label>
                            <div class="col-md-4">
                                <label id="lblProductCategory" name="lblProductCategory" runat="server" />
                            </div>
                            <label class="col-md-2 control-label" for="lblState">State</label>
                            <div class="col-md-4">
                                <label id="lblState" name="lblState" runat="server" />
                            </div>
                        </div>
                        <br /><br />
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="btnBack"></label>
                            <div class="col-md-10">
                                <input type="hidden" id="hdnID" name="hdnID" runat="server" />
                                <a class="btn btn-danger" onclick="fnBacktoList();">Back to List</a>
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

        <uc3:footer ID="footer1" runat="server" />

    </form>

    <script src="../Scripts/operation_product.js"></script>

</body>
</html>
