<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Update.aspx.cs" Inherits="ConsumeByJQuery.Products.Update" %>

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
    <link href="../Styles/datepicker.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/bootstrap-datepicker.js"></script>
</head>
<body onload="fnPopulateDropdowns(1);">
    <form id="CreateProduct" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <fieldset>

                        <legend>&nbsp;&nbsp;Update Product</legend>

                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtProductID">ProductID</label>
                            <div class="col-md-10">
                                <input type="text" id="txtProductID" name="txtProductID" placeholder="ProductID" class="form-control" runat="server" />
                                <span class='error_field' id='ProductID_msg'>&nbsp;</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtShortDescription">Short Description</label>
                            <div class="col-md-10">
                                <input type="text" id="txtShortDescription" name="txtShortDescription" placeholder="Short Description" class="form-control" runat="server" aria-multiline="True" />
                                <br />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtDescription">Description</label>
                            <div class="col-md-10">
                                <input type="text" id="txtDescription" name="txtDescription" placeholder="Description" class="form-control" runat="server" />
                                <span class='error_field' id='Description_msg'>&nbsp;</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtBrandName">Brand Name</label>
                            <div class="col-md-10">
                                <input type="text" id="txtBrandName" name="txtBrandName" placeholder="Brand Name" class="form-control" runat="server" />
                                <br />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtSerialNumber">Serial Number</label>
                            <div class="col-md-10">
                                <input type="text" id="txtSerialNumber" name="txtSerialNumber" placeholder="Serial Number" class="form-control" runat="server" />
                                <br />
                            </div>                            
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtUnit">Unit</label>
                            <div class="col-md-4">
                                <input type="text" id="txtUnit" name="txtUnit" placeholder="Unit" class="form-control" runat="server" />
                                <br />
                            </div>
                            <label class="col-md-2 control-label" for="txtWeight">Weight</label>
                            <div class="col-md-4">
                                <input type="text" id="txtWeight" name="txtWeight" placeholder="Weight" class="form-control" runat="server" />
                                <br />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtMinimalPrice">Minimal Price</label>
                            <div class="col-md-4">
                                <input type="text" id="txtMinimalPrice" name="txtMinimalPrice" placeholder="Minimal Price" class="form-control" runat="server" />
                                <span class='error_field' id='MinimalPrice_msg'>&nbsp;</span>
                            </div>
                            <label class="col-md-2 control-label" for="txtAskingPrice">Asking Price</label>
                            <div class="col-md-4">
                                <input type="text" id="txtAskingPrice" name="txtAskingPrice" placeholder="Asking Price" class="form-control" runat="server" />
                                <span class='error_field' id='AskingPrice_msg'>&nbsp;</span>
                            </div>
                        </div>                        
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="txtAvailableFrom">Available From</label>
                            <div class="col-md-4">
                                    <input type="date" id="txtAvailableFrom" name="txtAvailableFrom" placeholder="Available From" class="form-control" runat="server" />
                                <span class='error_field' id='AvailableFrom_msg'>&nbsp;</span>
                            </div>                
                            <label class="col-md-2 control-label" for="txtAvailableUntil">Available Until</label>
                            <div class="col-md-4">
                                    <input type="date" id="txtAvailableUntil" name="txtAvailableUntil" placeholder="Available Until" class="form-control" runat="server" />
                                <span class='error_field' id='AvailableUntil_msg'>&nbsp;</span>
                            </div>                            
                        </div>
                        <div class="form-group">                            
                            <label class="col-md-2 control-label" for="ddlProductCategory">Product Category</label>
                            <div class="col-md-4">
                                <select id="ddlProductCategory" name="ddlProductCategory" class="form-control"></select>
                                <span class='error_field' id='ProductCategoryID_msg'>&nbsp;</span>
                            </div>
                            <label class="col-md-2 control-label" for="ddlState">State</label>
                            <div class="col-md-4">
                                <select id="ddlState" name="ddlState" class="form-control"></select>
                                <span class='error_field' id='StateID_msg'>&nbsp;</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label" for="btnUpdate"></label>
                            <div class="col-md-10">
                                <input type="hidden" id="hdnID" name="hdnID" runat="server" />
                                <input id="btnUpdate" type="button" value="Update" onclick="fnUpdate();" class="btn btn-default" />
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
    <script>
        $(function () {
            $('#txtAvailableFrom').datepicker({
                format: "dd/mm/yyyy"
            });

            $('#txtAvailableUntil').datepicker({
                format: "dd/mm/yyyy"
            });
        });
</script>
</body>
</html>
