import React, {Component} from 'react';
import Editor from "./editor";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"",
			tagLine:"",
			content:"",
			author:"Admin"
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleContent = this.handleContent.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	handleContent(content){
		this.setState({content:content})
	}

	handleChange(event){
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
	}

	formSubmit(e){
		e.preventDefault();
		this.props.submit(this.state);
	}

	render() {
		return (
			<form onSubmit={this.formSubmit}>
				<div className="position-relative row form-group">
					<label htmlFor="Name" className="col-sm-2 col-form-label">Title</label>
					<div className="col-sm-10">
						<input name="title" placeholder="Enter Title" type="text" className="form-control" value={this.state.title} onChange={this.handleChange}/>
					</div>
				</div>
				<div className="position-relative row form-group">
					<label htmlFor="address" className="col-sm-2 col-form-label">Tag Line</label>
					<div className="col-sm-10">
						<input name="tagLine" placeholder="Enter Tag Line" type="text" className="form-control" value={this.state.tagLine} onChange={this.handleChange}/>
					</div>
				</div>
				<div className="position-relative row form-group">
					<label className="col-sm-2 col-form-label">Content</label>
					<div className="col-sm-10">
						<Editor content={this.state.content} changeContent={this.handleContent} className="form-control" />
					</div>
				</div>
				<div className="position-relative row form-check">
					<div className="col-sm-10 offset-sm-2">
						<button className="btn btn-primary" id="btn-submit-Monthly">Submit</button>
					</div>
				</div>
			</form>
		);
	}
}

export default PostForm;