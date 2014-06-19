<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="menulogin.ascx.cs" Inherits="ConsumeByJQuery.Controls.menulogin" %>

<div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div>
        <div class="navbar-header">
            <a class="navbar-brand" href="#">&nbsp;Auction</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li id="mn_Login"><a href="/Accounts/login.aspx"><asp:Literal id="ltlMenu_Login" runat="server" text="<%$Resources:Resources, Menu_Login %>"></asp:Literal></a></li>                
            </ul>
            <ul class="nav navbar-nav navbar-right">                
                <div class="btn-group">
                    <asp:Button runat="server" ID="btnEnglish" Text="English" ToolTip="English" class="btn btn-primary active" OnClick="btnEnglish_Click" />
                    <asp:Button runat="server" ID="btnDutch" Text="Dutch" ToolTip="Dutch" class="btn btn-default" OnClick="btnDutch_Click" />                  
                </div>
            </ul>
        </div>

    </div>
</div>