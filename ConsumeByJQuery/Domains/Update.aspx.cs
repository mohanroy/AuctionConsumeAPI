﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ConsumeByJQuery.Domains
{
    public partial class Update : Page
    {

        #region Global Variable
        private int ID;
        #endregion

        #region Page Load
        protected void Page_Load(object sender, EventArgs e)
        {
            InitializeParameters();

            if (!Page.IsPostBack)
            {
                hdnID.Value = ID.ToString();
                txtDomainID.Focus();
            }
        }
        #endregion

        #region InitializeParameters
        protected void InitializeParameters()
        {
            Int32.TryParse(Request.QueryString["ID"], out ID);
        }
        #endregion
    }
}