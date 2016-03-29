using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angular2.Controllers
{
    public class HomeController : Controller
    {
        // Base view to display the app component
        // The rest is handled by Angular
        public IActionResult Index()
        {
            return View();
        }
    }
}
