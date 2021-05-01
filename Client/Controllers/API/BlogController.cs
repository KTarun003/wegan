using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Core.Data;
using Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Client.Controllers.API
{
	[Route("api/blogs")]
	[ApiController]
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
		[HttpGet]
		public async Task<List<Post>> GetBlogs(int? pageNumber)
		{
			var posts = from p in _db.Posts where p.IsApproved && p.Type.Equals(PostType.Blog.ToString()) select p;
			return await posts.ToListAsync();
		}
		
		// GET
		[HttpGet("{id}")]
		public async Task<ActionResult<Post>> GetBlog(int? id)
		{
			if (id == null) return NotFound();
			var post = await _db.Posts.FindAsync(id);
			return post;
		}

		// POST: Posts/Create
		// To protect from overposting attacks, enable the specific properties you want to bind to.
		// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost]
		public async Task<IActionResult> CreateBlog(Post post)
		{
			post.CreatedAt = DateTime.Now.ToString(CultureInfo.InvariantCulture);
			post.UpdatedAt = DateTime.Now.ToString(CultureInfo.InvariantCulture);
			post.Type = PostType.Blog.ToString();
			post.IsApproved = false;
			post.User = await _userManager.FindByNameAsync(post.Author);
			await _db.Posts.AddAsync(post);
			await _db.SaveChangesAsync();
			return CreatedAtAction("CreateBlog",post);
		}
	}
}