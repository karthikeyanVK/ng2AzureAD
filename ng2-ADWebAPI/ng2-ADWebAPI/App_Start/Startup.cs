using System;
using System.Configuration;
using System.Threading.Tasks;
using Microsoft.Owin;
using Microsoft.Owin.Security.ActiveDirectory;
using Owin;

[assembly: OwinStartup(typeof(ng2ADWebAPI.App_Start.Startup))]

namespace ng2ADWebAPI.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
        private void ConfigureAuth(IAppBuilder app)
        {

            app.UseWindowsAzureActiveDirectoryBearerAuthentication(
                new WindowsAzureActiveDirectoryBearerAuthenticationOptions
                {
                    Audience = ConfigurationManager.AppSettings["Audience"],
                    Tenant = ConfigurationManager.AppSettings["Tenant"]
                });
        }
    }
}
