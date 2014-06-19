<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Details.aspx.cs" Inherits="ConsumeByJQuery.Users.Details" %>

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
    <form id="CreateDomain" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;Details User</legend>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="txtDomainID">AccountID</label>
                                <div class="col-md-10">
                                    <label id="lblAccountID" />
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="txtPassword">Password</label>
                                <div class="col-md-10">
                                    <label id="lblPassword" />  
                                </div>                                
                                <br /><br />
                                <label class="col-md-2 control-label" for="ddlDomain">Domain</label>
                                <div class="col-md-10">
                                    <label id="lblDomain"></label>
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="ddlRole">Role</label>
                                <div class="col-md-10">                                
                                    <label id="lblRole"></label>
                                </div>
                                <br /><br />
                                <label class="col-md-2 control-label" for="ddlState">State</label>
                                <div class="col-md-10">
                                    <label id="lblState"></label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="btnBack"></label>
                                <div class="col-md-10">
                                    <br />
                                    <input type="hidden" id="hdnID" name="hdnID" runat="server" />
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
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />

    </form>
    <script src="../Scripts/operation_user.js"></script>

</body>
</html>
