import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";

class AddIngredient extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add Ingredient" />
				<form>
					<div className="position-relative row form-group">
						<label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
						<div className="col-sm-10">
							<input id="Title" placeholder="Enter Name" type="text" className="form-control"/>
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="address" className="col-sm-2 col-form-label">Source</label>
						<div className="col-sm-10">
							<input id="tagLine" placeholder="Enter Source" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="address" className="col-sm-2 col-form-label">Is Vegan?</label>
						<div className="col-sm-2">
							<input id="tagLine" checked={false} type="checkbox" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-check">
						<div className="col-sm-10 offset-sm-2">
							<button className="btn btn-primary" id="btn-submit-Ingredient">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddIngredient;