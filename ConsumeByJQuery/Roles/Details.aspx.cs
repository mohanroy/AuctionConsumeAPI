using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ConsumeByJQuery.Roles
{
    public partial class Details : Page
    {

        #region Global Variable
        private int ID;
        private Dictionary<string, string> dictionaryParameters = null;
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

            dictionaryParameters = new Dictionary<string, string>(1);
            dictionaryParameters.Add("ID", ID.ToString());
        }
        #endregion
    }
}