import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import Editor from "../../components/editor";

class AddBlog extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:"",
			tagLine:"",
			content:"",
			author:"Admin"
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleContent = this.handleContent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleContent(content){
		this.setState({content:content})
	}

	handleChange(event){
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state);
		alert("The Blog has been created");
	}

	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add Blog"/>
				<form onSubmit={this.handleSubmit}>
					<div className="position-relative row form-group">
						<label className="col-sm-2 col-form-label">Title</label>
						<div className="col-sm-10">
							<input name="title" placeholder="Enter Title" type="text" value={this.state.title} onChange={this.handleChange} className="form-control"/>
						</div>
					</div>
					<div className="position-relative row form-group">
						<label className="col-sm-2 col-form-label">Tag Line</label>
						<div className="col-sm-10">
							<input name="tagLine" placeholder="Enter Tag Line" type="text" value={this.state.tagLine} onChange={this.handleChange} className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label className="col-sm-2 col-form-label">Content</label>
						<div className="col-sm-10">
							<Editor content={this.state.content} changeContent={this.handleContent} />
						</div>
					</div>
					<div className="position-relative row form-check">
						<div className="col-sm-10 offset-sm-2">
							<button className="btn btn-primary" id="btn-submit-Monthly">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddBlog;