import React, {Component} from 'react';

class PostCard extends Component {
	render() {
		return (
			<div>
				<div className="card">
					<div className="card-header" style={{background: "cornflowerblue"}}>
						<h4>
							<a className="text-dark" href="#">{this.props.post.title}</a>
						</h4>
					</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>{this.props.post.tagLine}</p>
							<footer className="blockquote-footer">{this.props.post.author}
								<cite title="Source Title"> {this.props.post.createdAt}</cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<hr/>
			</div>
		);
	}
}

export default PostCard;