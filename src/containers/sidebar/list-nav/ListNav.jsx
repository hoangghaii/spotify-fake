import React from "react";
import PropTypes from "prop-types";
import NavItem from "./nav-item/NavItem";

function ListNav(props) {
	return (
		<div className="side-lists max-h-full overflow-y-auto pl-6">
			<NavItem
				title="Your Library"
				links={[
					"Made For You",
					"Recently Played",
					"Liked Songs",
					"Albums",
					"Artists",
					"Podcasts",
				]}
			></NavItem>
			<NavItem
				title="Playlists"
				links={[
					"Walk Like A Badass",
					"Rock Legends 🎸",
					"Focus",
					"Road Trip 🚗",
					"Chrono Cross OST",
					"Exercise 🔥",
					"Dancing",
					"Liked from Radio",
					"This is José José",
					"Corona Capital",
				]}
			></NavItem>
		</div>
	);
}

ListNav.propTypes = {};

export default ListNav;
