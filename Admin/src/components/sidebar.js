import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {
	render() {
		return (
			<div className="app-sidebar sidebar-shadow">
				<div className="app-header__logo">
					<div className="logo-src"></div>
					<div className="header__pane ml-auto">
						<div>
							<button type="button" className="hamburger close-sidebar-btn hamburger--elastic"
									data-class="closed-sidebar">
								<span className="hamburger-box">
									<span className="hamburger-inner"></span>
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="app-header__mobile-menu">
					<div>
						<button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
							<span className="hamburger-box">
								<span className="hamburger-inner"></span>
							</span>
						</button>
					</div>
				</div>
				<div className="app-header__menu">
					<span>
						<button type="button"
								className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
							<span className="btn-icon-wrapper">
								<i className="fa fa-ellipsis-v fa-w-6"></i>
							</span>
						</button>
					</span>
				</div>
				<div className="scrollbar-sidebar">
					<div className="app-sidebar__inner">
						<ul className="vertical-nav-menu">
							<li className="app-sidebar__heading">Dashboard</li>
							<li>
								<Link to="/">
									<i className="metismenu-icon pe-7s-rocket"></i>
									Main Dashboard
								</Link>
							</li>
							<li>
								<Link to="/home" >
									<i className="metismenu-icon pe-7s-rocket"></i>
									Home Page
								</Link>
							</li>
							<li className="app-sidebar__heading">Add Items</li>
							<li>
								<Link to="/addBlog">
									<i className="metismenu-icon pe-7s-add-user"/>
									Create Blog
								</Link>
							</li>
							<li>
								<Link to="/addGuide">
									<i className="metismenu-icon pe-7s-add-user"/>
									Create Guide
								</Link>
							</li>
							<li>
								<Link to="/addIngredient">
									<i className="metismenu-icon pe-7s-add-user"/>
									Add Ingredient
								</Link>
							</li>
							<li>
								<Link to="/addPlace">
									<i className="metismenu-icon pe-7s-add-user"/>
									Add Spot for Vegans
								</Link>
							</li>
							<li className="app-sidebar__heading">Lists</li>
							<li>
								<Link to="/listBlogs">
									<i className="metismenu-icon pe-7s-display1"/>
									Blogs
								</Link>
							</li>
							<li>
								<Link to="/listGuides">
									<i className="metismenu-icon pe-7s-display2"/>
									Guides
								</Link>
							</li>
							<li>
								<Link to="/listIngredients">
									<i className="metismenu-icon pe-7s-albums"/>
									Ingredients
								</Link>
							</li>
							<li>
								<Link to="/listPlaces">
									<i className="metismenu-icon pe-7s-portfolio"/>
									Spots for Vegans
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;