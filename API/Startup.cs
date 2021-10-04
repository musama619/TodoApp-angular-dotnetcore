using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using API.Extensions;
using API.Interfaces;
using Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;


namespace API
{
    public class Startup
    {
        //IConfiguration is injected by Host on Startup
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        

        // This method gets called by the runtime. Use this method to add services to the container.
        //These services are mostly used using Dependency Injection
       //Ordering does not matter in ConfigureServices
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddApplicationServices(Configuration);


            //Register All the controllers 
            services.AddControllers();


            //Cross Orifin Resource Sharing: Use to allow cross domain calls. Like Angular uses different domain and .net core uses different. 
            //and for security .net doest not allow cross domain calls. To enable this we use CORS.
            services.AddCors(options =>
            {
                options.AddPolicy(
                    "CorsPolicy",
                    builder => builder.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddIdentityServices(Configuration);

            //Swagger for debugging/testing API
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //This method setup middleware, routing rules
        //Ordering Matters in Configure
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //Middleware componenets


            //If ASPNETCORE_ENVIRONMENT is development use these pipelines
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            }

            //Redirect http requests to HTTPS
            app.UseHttpsRedirection();

            //enable routing descisions
            app.UseRouting();

            //Add cors for cross domain requests
            app.UseCors("CorsPolicy");

            //identify the user
            app.UseAuthentication();

            //identify what user can do
            app.UseAuthorization();

            //define routing rules
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
