import React, {Component} from 'react';

class Testimonial extends Component {
	render() {
		return (
			<div className="col-lg-4">
				<div className="mx-auto testimonial-item mb-5 mb-lg-0">
					<img className="rounded-circle img-fluid mb-3" src="" alt="Image of The Person" />
						<h5>{this.props.item.name}</h5>
						<p className="font-weight-light mb-0">"{this.props.item.quote}"</p>
				</div>
			</div>
		);
	}
}

export default Testimonial;