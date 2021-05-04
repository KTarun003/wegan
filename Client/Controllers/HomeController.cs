using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Core.Data;
using Core.Models;
using Core.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Client.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;
		private readonly AppIdentityDbContext _db;

		public HomeController(ILogger<HomeController> logger, AppIdentityDbContext db)
        {
            _logger = logger;
            _db = db;
        }

		public IActionResult Index()
		{
			var homeVm = new HomeVm()
			{
				Home = _db.Home.Find(1),
				Ingredient = new Ingredient(),
				Testimonials = _db.Testimonials.Take(3).ToList()
			};
			return View(homeVm);
		}

		public IActionResult Privacy()
		{
			return View();
		}

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Terms()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
		
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Search([Bind("Name")] Ingredient ingredient)
        {
	        return View(ingredient);
        }

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
		}
	}
}