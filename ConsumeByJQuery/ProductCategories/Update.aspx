<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Update.aspx.cs" Inherits="ConsumeByJQuery.ProductCategories.Update" %>

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
<body onload="fnPopulateDropdowns(1);">
    <form id="UpdateProductCategory" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;Update ProductCategory</legend>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="txtProductCategoryID">ProductCategoryID</label>
                                <div class="col-md-10">
                                    <input type="text" id="txtProductCategoryID" name="txtProductCategoryID" placeholder="ProductCategoryID" class="form-control" runat="server" />
                                    <span class='error_field' id='ProductCategoryID_msg'>&nbsp;</span>
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="ddlDomain">Domain</label>
                                <div class="col-md-10">
                                    <select id="ddlDomain" name ="ddlDomain" class="form-control"></select>
                                    <span class='error_field' id='DomainID_msg'>&nbsp;</span>
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="ddlParentCategory">Parent Category</label>
                                <div class="col-md-10">
                                    <select id="ddlParentCategory" name ="ddlParentCategory" class="form-control"></select>
                                </div>
                                <br /><br /><br /><br />
                                <label class="col-md-2 control-label" for="txtStateID">State</label>
                                <div class="col-md-10">
                                    <select id="ddlState" name ="ddlState" class="form-control"></select>
                                    <span class='error_field' id='StateID_msg'>&nbsp;</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="btnCreate"></label>
                                <div class="col-md-10">
                                    <br />
                                    <input id="btnUpdate" type="button" onclick="fnUpdate();" value="Update" class="btn btn-default" />
                                    <a class="btn btn-danger" onclick="fnBacktoList();">Back to List</a>
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
