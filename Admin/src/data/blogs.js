module.exports = {
	getBlogs: function (){
		let blogs
		fetch("https://localhost:5000")
			.then(data => blogs = data.json())
		return blogs;
	}
}

