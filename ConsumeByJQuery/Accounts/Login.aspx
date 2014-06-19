<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ConsumeByJQuery.Accounts.Login" %>

<%@ Register Src="~/Controls/menulogin.ascx" TagName="menu" TagPrefix="uc2" %>
<%@ Register Src="~/Controls/footer.ascx" TagName="footer" TagPrefix="uc3" %>
<%@ Register Src="~/Controls/headerelements.ascx" TagName="headerelements" TagPrefix="uc1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

    <uc1:headerelements ID="headerelements1" runat="server" />

    <meta content="" name="description" />
    <meta content="" name="author" />
    <title>Auction :: Login</title>
    <link href="../Styles/Custom/signin.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="form-signin">
                <h2 class="form-signin-heading">Login</h2>
                <input id="txtAccountID" type="text" class="form-control" placeholder="Account ID" autofocus="autofocus" />
                <span class='error_field' id='UserID_msg'>&nbsp;</span>
                <br />
                <input id="txtPassword" type="password" class="form-control" placeholder="Password" />  
                <span class='error_field' id='Password_msg'>&nbsp;</span>
                <button class="btn btn-lg btn-primary btn-block" type="button" onclick="fnLogin();">Sign in</button>
                </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />
    </form>
    <script src="../Scripts/operation_login.js"></script>
</body>
</html>