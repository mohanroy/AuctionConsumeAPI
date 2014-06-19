using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Auction.WebControls;

namespace ConsumeByJQuery.Controls
{
    public partial class menu : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Request.Cookies.Get("PrefLang") != null && !string.IsNullOrEmpty(Request.Cookies.Get("PrefLang").Value))
                {
                    if (Request.Cookies.Get("PrefLang").Value == "en-US")
                    {
                        btnEnglish.CssClass = "btn btn-primary active";
                        btnDutch.CssClass = "btn btn-default";
                    }
                    else if (Request.Cookies.Get("PrefLang").Value == "nl-NL")
                    {
                        btnEnglish.CssClass = "btn btn-default";
                        btnDutch.CssClass = "btn btn-primary active";
                    }
                    else
                    {
                        btnEnglish.CssClass = "btn btn-primary active";
                        btnDutch.CssClass = "btn btn-default";
                    }
                }
                else
                {
                    btnEnglish.CssClass = "btn btn-primary active";
                    btnDutch.CssClass = "btn btn-default";
                }
            }
        }

        protected void btnEnglish_Click(object sender, EventArgs e)
        {            
            changeLanguage("en-US");           
        }

        protected void btnDutch_Click(object sender, EventArgs e)
        {
            changeLanguage("nl-NL");
        }

        private void changeLanguage(string languageSelected)
        {
            HttpCookie myCookie = new HttpCookie("PrefLang");
            myCookie.Expires = DateTime.Now.AddMonths(2);
            myCookie.Value = languageSelected;
            Response.Cookies.Add(myCookie);

            Dictionary<string, string> dictionaryParametersH = null;
            string[] arrURL = null;
            string[] arrURL1 = null;
            string[] arrURL2 = null;

            if (Request.Url.ToString().Contains('?'))
            {
                arrURL = Request.Url.ToString().Split('?');
                if (arrURL[1].Contains('&'))
                {
                    arrURL1 = arrURL[1].Split('&');
                    dictionaryParametersH = new Dictionary<string, string>(arrURL1.Length);
                    for (int i = 0; i < arrURL1.Length; i++)
                    {
                        if (arrURL1[i].Contains('='))
                        {
                            arrURL2 = arrURL1[i].Split('=');
                            dictionaryParametersH.Add(arrURL2[0].ToString(), arrURL2[1].ToString());
                        }
                    }
                    Response.Redirect(arrURL[0] + "?" + QueryStringAPI.GetEncryptedQueryString(dictionaryParametersH));
                }
                else
                {
                    dictionaryParametersH = new Dictionary<string, string>(1);
                    if (arrURL[1].Contains('='))
                    {
                        arrURL2 = arrURL[1].Split('=');
                        dictionaryParametersH.Add(arrURL2[0].ToString(), arrURL2[1].ToString());
                        Response.Redirect(arrURL[0] + "?" + QueryStringAPI.GetEncryptedQueryString(dictionaryParametersH));
                    }
                }
            }
            else
            {
                Response.Redirect(Request.Url.ToString());
            }
        }
    }
}