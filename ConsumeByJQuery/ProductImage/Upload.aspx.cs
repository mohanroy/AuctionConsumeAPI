﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ConsumeByJQuery.ProductImage
{
    public partial class Upload : System.Web.UI.Page
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