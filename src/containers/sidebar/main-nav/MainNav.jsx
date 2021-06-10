import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes, secondRoutes } from "./../../../routes";

function MainNav(props) {
	const { handleOpenUtilities } = props;

	const onOpenUtilities = (value) => {
		if (!handleOpenUtilities) return;
		handleOpenUtilities(value);
	};

	return (
		<Fragment>
			<nav className="mb-2 mt-2">
				<ul>
					{mainRoutes.map((route, index) => {
						return (
							<NavLink
								key={index}
								to={route.path}
								className="flex flex-wrap items-center fill-current hover:text-white text-gray-400 border-l-4 border-transparent"
								activeClassName="border-green-500"
								activeStyle={{ color: "#fff" }}
								onClick={() =>
									onOpenUtilities(route.name.toLowerCase())
								}
							>
								{route.icon}
								<span className="font-bold pt-2 pb-2 cursor-pointer">
									{route.name}
								</span>
							</NavLink>
						);
					})}
				</ul>
			</nav>

			<nav className="mb-2 mt-2">
				<ul>
					{secondRoutes.map((route, index) => {
						return (
							<NavLink
								key={index}
								to={route.path}
								className="flex flex-wrap items-center fill-current hover:text-white text-gray-400 border-l-4 border-transparent"
								activeClassName="border-green-500"
								activeStyle={{ color: "#fff" }}
								onClick={() =>
									onOpenUtilities(route.name.toLowerCase())
								}
							>
								{route.icon}
								<span className="font-bold pt-2 pb-2 cursor-pointer">
									{route.name}
								</span>
							</NavLink>
						);
					})}
				</ul>
			</nav>
		</Fragment>
	);
}

MainNav.propTypes = {
	handleOpenUtilities: PropTypes.func,
};

export default MainNav;
