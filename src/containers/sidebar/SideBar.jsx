import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MainNav from "./main-nav/MainNav";
import ListNav from "./list-nav/ListNav";

function SideBar(props) {
	return (
		<div className="flex flex-col side-upper">
			<svg
				className="h-8 w-8 mt-2 ml-4 fill-current text-white"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" />
			</svg>
			<MainNav />
			<ListNav />
		</div>
	);
}

SideBar.propTypes = {};

export default SideBar;
