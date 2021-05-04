using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Core.Data;
using Core.Models;
using Core.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Client.Controllers.API
{
	[Route("api/home")]
	[ApiController]
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;
        private readonly AppIdentityDbContext _db;

        public HomeController(ILogger<HomeController> logger,AppIdentityDbContext db)
		{
			_logger = logger;
            _db = db;
        }

		[HttpGet]
		public HomeVm GetHome()
        {
            var homeVm = new HomeVm()
			{
				Home = _db.Home.Find(1),
				Testimonials = _db.Testimonials.Take(3).ToList()
			};
			return homeVm;
		}

        // PUT: api/Testimonials/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTestimonial(HomeVm homeVm)
        {
            if (1 != homeVm.Home.Id)
            {
                return BadRequest();
            }

            _db.Entry(homeVm).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HomeVmExists(homeVm.Home.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        private bool HomeVmExists(int id)
        {
            return _db.Testimonials.Any(e => e.Id == id);
        }
    }
}