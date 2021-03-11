import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Ingredients from "./pages/Ingredients";
import Places from "./pages/Places";
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route path="/blog">
							<Blog />
						</Route>
						<Route path="/ingredients">
							<Ingredients />
						</Route>
						<Route path="/places">
							<Places />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>

		);
	}
}
export default App
