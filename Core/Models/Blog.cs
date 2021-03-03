using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using static System.Net.Mime.MediaTypeNames;

namespace Core.Models
{
	public class Blog
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public bool IsApproved { get; set; }
		
		[DataType("Text")]
		public string Content { get; set; }

		public string UserId { get; set; }

		public IdentityUser User { get; set; }
	}
}