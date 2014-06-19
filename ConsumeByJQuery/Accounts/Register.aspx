<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="ConsumeByJQuery.Accounts.Register" %>

<%@ Register Src="~/Controls/menulogin.ascx" TagName="menu" TagPrefix="uc2" %>
<%@ Register Src="~/Controls/footer.ascx" TagName="footer" TagPrefix="uc3" %>
<%@ Register Src="~/Controls/headerelements.ascx" TagName="headerelements" TagPrefix="uc1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

    <uc1:headerelements ID="headerelements1" runat="server" />

    <meta content="" name="description" />
    <meta content="" name="author" />
    <title>Auction :: Registration</title>
    <link href="../Styles/Custom/signin.css" rel="stylesheet" type="text/css" />
</head>
<body onload="fnPopulateDropdowns();">
    <form id="form1" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="form-signin">
                <h2 class="form-signin-heading">Register</h2>
                <input id="txtAccountID" type="email" class="form-control" placeholder="Email" autofocus="autofocus" />
                <span class='error_field' id='AccountID_msg'>&nbsp;</span>
                <br />
                <input id="txtPassword" type="password" class="form-control" placeholder="Password" />  
                <span class='error_field' id='Password_msg'>&nbsp;</span>
                <br />
                <input id="txtConfirmPassword" type="password" class="form-control" placeholder="Confirm Password" />  
                <span class='error_field' id='CPassword_msg'>&nbsp;</span>
                <br />
                <select id="ddlDomain" name="ddlDomain" class="form-control"></select>
                <span class='error_field' id='Domain_msg'>&nbsp;</span>
                <br />
                <select id="ddlRole" name="ddlRole" class="form-control"></select>
                <span class='error_field' id='Role_msg'>&nbsp;</span>
                <br />
                <select id="ddlState" name="ddlState" class="form-control"></select>
                <span class='error_field' id='StateID_msg'>&nbsp;</span>


                <button class="btn btn-lg btn-primary btn-block" type="button" onclick="fnRegister();">Register</button>
                </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />
    </form>
    <script src="../Scripts/operation_register.js"></script>
</body>
</html>