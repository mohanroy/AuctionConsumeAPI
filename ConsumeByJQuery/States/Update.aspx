<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Update.aspx.cs" Inherits="ConsumeByJQuery.States.Update" %>

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
<body onload="fnDetailsUpdate();">
    <form id="UpdateState" runat="server">

        <uc2:menu ID="menu1" runat="server" />

        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="clearfix">
                        <fieldset>

                            <legend>&nbsp;&nbsp;Update State</legend>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="txtStateID">StateID</label>
                                <div class="col-md-10">
                                    <input type="text" id="txtStateID" name="txtStateID" placeholder="StateID" class="form-control" runat="server" />
                                    <span class='error_field' id='StateID_msg'>&nbsp;</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 control-label" for="btnCreate"></label>
                                <div class="col-md-10">
                                    <br />
                                    <input type="button" onclick="fnUpdate();" value="Update" class="btn btn-default" />
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

                            <input type="hidden" id="hdnID" runat="server" />

                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

        <uc3:footer ID="footer1" runat="server" />

    </form>
    <script src="../Scripts/operation_state.js"></script>        
</body>
</html>
