import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import ListBlogs from "./pages/Blog/list";
import AddBlog from "./pages/Blog/add";
import ListGuides from "./pages/Guides/list";
import AddGuide from "./pages/Guides/add";
// import ListPlaces from "./pages/Places/list";
// import AddPlace from "./pages/Places/add";
// import ListIngredients from "./pages/Ingredients/list";
// import AddIngredient from "./pages/Ingredients/add";
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./components/comingSoon";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
					<div className="app-main">
						<Sidebar />
						<div className="app-main__outer">
							<Switch>
								<Route path="/addBlog">
									<AddBlog />
								</Route>
								<Route path="/addGuide">
									<AddGuide />
								</Route>
								<Route path="/addIngredient">
									<ComingSoon />
								</Route>
								<Route path="/addPlace">
									<ComingSoon />
								</Route>
								<Route path="/listGuides">
									<ListGuides />
								</Route>
								<Route path="/listBlogs">
									<ListBlogs />
								</Route>
								<Route path="/listIngredients">
									<ComingSoon />
								</Route>
								<Route path="/listPlaces">
									<ComingSoon />
								</Route>
								<Route path="/home">
									<Home />
								</Route>
								<Route path="/">
									<Dashboard />
								</Route>
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
export default App
