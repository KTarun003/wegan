using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
	public class PlacesController : Controller
	{
		// GET
		public IActionResult Index()
		{
			return View();
		}
	}
}