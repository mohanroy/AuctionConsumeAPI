<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="menu.ascx.cs" Inherits="ConsumeByJQuery.Controls.menu" %>

<div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <%--<div class="container">--%>
    <div>
        <div class="navbar-header">
            <a class="navbar-brand" href="#">&nbsp;Auction</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li id="mn_Dashboard"><a href="/dashboard.aspx"><%--<span class="glyphicon glyphicon-home"></span>&nbsp;--%><asp:Literal id="ltlMenu_Dashboard" runat="server" text="<%$Resources:Resources, Menu_Dashboard %>"></asp:Literal></a></li>
                <li id="mn_Users"><a href="/Users/List.aspx">Users</a></li>
                <li id="mn_Products"><a href="/Products/List.aspx">Products</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown" id="mn_Setup">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Setup <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="/States/List.aspx">States</a></li>
                        <li><a href="/Roles/List.aspx">Roles</a></li>
                        <li><a href="/Domains/List.aspx">Domains</a></li>
                        <li><a href="/ProductCategories/List.aspx">Product Categories</a></li>
                        <li class="divider"></li>
                        <li><a href="#" onclick="fnLogout();">Sign out</a></li>
                    </ul>
                </li>
                <div class="btn-group">
                    <asp:Button runat="server" ID="btnEnglish" Text="English" ToolTip="English" class="btn btn-primary active" OnClick="btnEnglish_Click" />
                    <asp:Button runat="server" ID="btnDutch" Text="Dutch" ToolTip="Dutch" class="btn btn-default" OnClick="btnDutch_Click" />                  
                </div>
            </ul>
        </div>

    </div>
</div>