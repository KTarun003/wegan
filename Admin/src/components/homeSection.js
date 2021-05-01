import React, {Component} from 'react';
import * as ReactDOM from "react-dom";

class HomeSection extends Component {
	render() {
		return (
			<section className="text-center bg-light ">
				<div className="container">
					<h2 className="mb-5" style={{color: "#6610f2"}}>
						{this.props.title}
					</h2>
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-8" dangerouslySetInnerHTML={{__html:this.props.content}}>

						</div>
						<div className="col-lg-2"></div>
					</div>
				</div>
				<hr/>
			</section>
		);
	}
}

export default HomeSection;