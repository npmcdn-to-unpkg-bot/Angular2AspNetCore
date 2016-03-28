using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;

namespace Angular2
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc().AddJsonOptions(options =>
                  {
                      options.SerializerSettings.ContractResolver =
                          new CamelCasePropertyNamesContractResolver();
                  });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseDeveloperExceptionPage();
            app.UseStaticFiles();

            app.UseMvc(config =>
            {      
                config.MapRoute("defaultApiAction", "api/{controller}/{action}/{id?}");
                config.MapRoute("defaultApi", "api/{controller}/{id?}");
                config.MapRoute("spa-fallback", "{*anything}", new { controller = "Home", action = "Index" });               
            });
        }

        // Entry point for the application.
        public static void Main(string[] args) => Microsoft.AspNet.Hosting.WebApplication.Run<Startup>(args);
    }
}
