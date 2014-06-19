<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="ConsumeByJQuery._default" %>

<%@ Register Src="~/Controls/headerelements.ascx" TagName="headerelements" TagPrefix="uc1" %>
<%@ Register Src="~/Controls/menu.ascx" TagName="menu" TagPrefix="uc2" %>
<%@ Register Src="~/Controls/footer.ascx" TagName="footer" TagPrefix="uc3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

    <uc1:headerelements ID="headerelements1" runat="server" />

    <meta content="" name="description" />
    <meta content="" name="author" />
    <title>Auction :: Dashboard</title>

</head>
<body>
    <form id="form1" runat="server">

        <uc2:menu ID="menu1" runat="server" />


        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        Dashboard
                    </div>
                </div>
            </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />

    </form>    
</body>
</html>
