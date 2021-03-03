using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
	public class BlogController : Controller
	{
		// GET
		public IActionResult Index()
		{
			return View();
		}
		
		// GET
		public IActionResult Post()
		{
			return View();
		}
	}
}