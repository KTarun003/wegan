import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import CKEditor from "ckeditor4-react";
import Editor from "../../components/editor";
import PostForm from "../../components/postForm";

class AddGuide extends Component {
	handleSubmit(data){
		console.log(data);
		fetch('https://localhost:5001/api/guides', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
			.then(r => {
				console.log(r);
				alert("The Guide has been created");
			})
			.catch(err => {
				console.log(err);
				alert("There is some Error Creating Post");
			});
	}

	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add Guide" />
				<PostForm submit={this.handleSubmit} />
			</div>
		);
	}
}

export default AddGuide;