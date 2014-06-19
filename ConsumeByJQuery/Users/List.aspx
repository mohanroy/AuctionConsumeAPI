<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="List.aspx.cs" Inherits="ConsumeByJQuery.Users.List" %>

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
<body onload="fnList();">
    <form id="form1" runat="server">

        <uc2:menu ID="menu1" runat="server" />


        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;List User</legend>

                            <div class="panel panel-info">
                                <div class="panel-body" style="padding-left: 0px;">
                                    <div class="col-md-10">
                                        <a class="btn btn-default" onclick="fnCreate();">Create</a>
                                    </div>
                                </div>

                                <table class="table">
                                    <thead>
                                        <tr runat="server" id="trControlHead">
                                            <th style="width: 25%;">UserID</th>
                                            <th style="width: 15%;">Password</th>
                                            <th style="width: 20%;">Role</th>
                                            <th style="width: 20%;">Domain</th>
                                            <th style="width: 10%;">State</th>
                                            <th style="">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="productdetails">
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <br />
                                    <header id="alert">
                                        <div id="dvMessage" class=""></div>
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
