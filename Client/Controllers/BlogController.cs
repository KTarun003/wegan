using System;
using System.Globalization;
using System.Threading.Tasks;
using Core.Data;
using Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
	public class BlogController : Controller
	{
		private readonly AppIdentityDbContext _db;
		private readonly UserManager<IdentityUser> _userManager;

		public BlogController(AppIdentityDbContext db, UserManager<IdentityUser> userManager)
		{
			_db = db;
			_userManager = userManager;
		}
		// GET
		public IActionResult Index(int? pageNumber)
		{
			return View();
		}
		
		// GET
		public IActionResult Post()
		{
			return View();
		}
		
		// GET
		public IActionResult Create()
		{
			return View();
		}
		
		// POST: Posts/Create
		// To protect from overposting attacks, enable the specific properties you want to bind to.
		// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Create([Bind("Title,TagLine,Content,Author")] Post post)
		{
			if (ModelState.IsValid && post.Author != null)
			{
				post.CreatedAt = DateTime.Now.ToString(CultureInfo.InvariantCulture);
				post.IsApproved = false;
				post.User = await _userManager.FindByNameAsync(post.Author);
				await _db.Posts.AddAsync(post);
				await _db.SaveChangesAsync();
				return RedirectToAction(nameof(Index));
			}
			return View(post);
		}
	}
}