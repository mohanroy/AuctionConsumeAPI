<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Details.aspx.cs" Inherits="ConsumeByJQuery.ProductCategories.Details" %>

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
    <form id="form1" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;Details ProductCategory</legend>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="txtProductCategoryID">ProductCategoryID</label>
                                <div class="col-md-10">
                                    <asp:Label runat="server" ID="lblProductCategoryID" />
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="txtDomainID">Domain</label>
                                <div class="col-md-10">
                                    <asp:Label runat="server" ID="lblDomainID" />
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="txtParentCategoryID">Parent Category</label>
                                <div class="col-md-10">
                                    <asp:Label runat="server" ID="lblParentCategoryID" />
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="txtStateID">State</label>
                                <div class="col-md-10">
                                    <asp:Label runat="server" ID="lblStateID" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="btnCreate"></label>
                                <div class="col-md-10">
                                    <br />
                                    <a class="btn btn-danger" onclick="fnBacktoList();">Back to List</a>
                                    <br />
                                </div>
                            </div>

                            <input type="hidden" id="hdnID" runat="server" />

                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />

    </form>
    <script src="../Scripts/operation_productcategory.js"></script>    
</body>
</html>
