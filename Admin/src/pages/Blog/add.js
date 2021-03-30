import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import CKEditor from 'ckeditor4-react';

class AddBlog extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add Blog"/>
				<form>
					<div className="position-relative row form-group">
						<label htmlFor="Name" className="col-sm-2 col-form-label">Title</label>
						<div className="col-sm-10">
							<input id="Title" placeholder="Enter Title" type="text" className="form-control"/>
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="address" className="col-sm-2 col-form-label">Tag Line</label>
						<div className="col-sm-10">
							<input id="tagLine" placeholder="Enter Tag Line" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="phone" className="col-sm-2 col-form-label">Content</label>
						<div className="col-sm-10">
							<CKEditor data="" className="form-control"/>
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