using Microsoft.AspNetCore.Identity;

namespace Core.Models
{
	public class Blog
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public bool IsApproved { get; set; }

		public string Content { get; set; }

		public string UserId { get; set; }

		public IdentityUser User { get; set; }
	}
}