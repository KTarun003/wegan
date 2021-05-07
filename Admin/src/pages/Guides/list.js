import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import PostCard from "../../components/postCard";
class ListGuides extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		fetch("https://localhost:5001/api/guides")
			.then(res => res.json())
			.then(data => this.setState({list: data}))
	}
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="List of Guides"/>
				{this.state.list.map(e => <PostCard post={e} key={e.id}/>)}
			</div>
		);
	}
}

export default ListGuides;