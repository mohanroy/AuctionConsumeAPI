﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Create.aspx.cs" Inherits="ConsumeByJQuery.Domains.Create" %>

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
<body onload="fnPopulateStates(0);">
    <form id="CreateDomain" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;Create Domain</legend>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="txtDomainID">DomainID</label>
                                <div class="col-md-10">
                                    <input type="text" id="txtDomainID" name="txtDomainID" placeholder="DomainID" class="form-control" runat="server" />
                                    <span class='error_field' id='DomainID_msg'>&nbsp;</span>
                                </div>
                                <br /><br />
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
                                    <input id="btnCreate" type="button" value="Create" onclick="fnADD();" class="btn btn-default" />
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
    <script src="../Scripts/operation_domain.js"></script>

</body>
</html>
