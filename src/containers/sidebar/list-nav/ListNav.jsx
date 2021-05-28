import React from "react";
import PropTypes from "prop-types";
import NavItem from "./nav-item/NavItem";

function ListNav(props) {
	return (
		<div className="side-lists max-h-full overflow-y-auto pl-5 pt-3 hide-scroll border-t-2 border-gray-800 fill-current">
			<NavItem
				links={[
					"Made For You",
					"Recently Played",
					"Liked Songs",
					"Albums",
					"Artists",
					"Podcasts",
				]}
			></NavItem>
		</div>
	);
}

ListNav.propTypes = {};

export default ListNav;
