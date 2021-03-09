using System.Collections.Generic;
using Core.Models;

namespace Core.ViewModels
{
	public class HomeVm
	{
		public Home Home { get; set; }

		public Ingredient Ingredient { get; set; }

		public List<Testimonial> Testimonials { get; set; }
	}
}