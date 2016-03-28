using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Angular2.Models;

namespace Angular2.Controllers
{
    [Route("api/[controller]")]
    public class HeroController : Controller
    {
        List<Hero> HEROES = new List<Hero>(){
            new Hero(){Id = 11, Name = "Mr. Nice"},
            new Hero(){Id = 12, Name = "Narco"},
            new Hero(){Id = 13, Name = "Bombasto"},
            new Hero(){Id = 14, Name = "Celeritas"},
            new Hero(){Id = 15, Name = "Magneta"},
            new Hero(){Id = 16, Name = "RubberMan"},
            new Hero(){Id = 17, Name = "Dynama"},
            new Hero(){Id = 18, Name = "Dr IQ"},
            new Hero(){Id = 19, Name = "Magma"},
            new Hero(){Id = 20, Name = "Tornado"}
        };
    
        [HttpGet]
        public IActionResult Get()
        {
            return new ObjectResult(HEROES);
        }
        
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return new ObjectResult(HEROES.FirstOrDefault(c=>c.Id == id));
        }
    }
}
