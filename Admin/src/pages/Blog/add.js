import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import Editor from "../../components/editor";
import PostForm from "../../components/postForm";

class AddBlog extends Component {
	handleSubmit(data){
		console.log(data);
		fetch('https://localhost:5001/api/blogs', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
			.then(r => {
				console.log(r);
				alert("The Blog has been created");
			})
			.catch(err => {
				console.log(err);
				alert("There is some Error Creating Blog");
			});
	}

	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add Blog"/>
				<PostForm submit={this.handleSubmit} />
			</div>
		);
	}
}

export default AddBlog;