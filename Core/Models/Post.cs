using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using static System.Net.Mime.MediaTypeNames;

namespace Core.Models
{
	public class Post
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public string TagLine { get; set; }

		public bool IsApproved { get; set; }

		public string Content { get; set; }

		public string UserId { get; set; }
		
		[Timestamp]
		public DateTime CreatedAt { get; set; }

		[Timestamp]
		public DateTime UpdatedAt { get; set; }

		public IdentityUser User { get; set; }
	}
}