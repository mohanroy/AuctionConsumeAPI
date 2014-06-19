using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ConsumeByJQuery.Domains
{
    public partial class Create : Page
    {

        #region Global Variable
        #endregion

        #region Page Load
        protected void Page_Load(object sender, EventArgs e)
        {
            InitializeParameters();

            if (!Page.IsPostBack)
            {                
                txtDomainID.Focus();
            }
        }
        #endregion

        #region InitializeParameters
        protected void InitializeParameters()
        {

        }
        #endregion
    }
}