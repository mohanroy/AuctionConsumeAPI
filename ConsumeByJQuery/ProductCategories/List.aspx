﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="List.aspx.cs" Inherits="ConsumeByJQuery.ProductCategories.List" %>

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

                            <legend>&nbsp;&nbsp;List Product Categories</legend>

                            <div class="panel panel-info">
                                <div class="panel-body" style="padding-left: 0px;">
                                    <div class="col-md-10">
                                        <a class="btn btn-default" onclick="fnCreate();">Create</a>
                                    </div>
                                </div>

                                <table class="table">
                                    <thead>
                                        <tr runat="server" id="trControlHead">
                                            <th style="width: 25%;">CategoryID</th>
                                            <th style="width: 25%;">Parent CategoryID</th>
                                            <th style="width: 25%;">Domain</th>
                                            <th style="width: 15%;">State</th>
                                            <th style="">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="productcategorydetails">
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
    <script src="../Scripts/operation_productcategory.js"></script>
</body>
</html>