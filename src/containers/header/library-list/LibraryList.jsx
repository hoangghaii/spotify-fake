import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { libraryRoutes } from "./library-routes";

function LibraryList(props) {
	return (
		<nav className="library-list">
			<ul className="library-list__list">
				{libraryRoutes.map((route, index) => (
					<NavLink
						key={index}
						to={route.path}
						className="library-list__item"
						activeClassName="library-list__item-active"
					>
						{route.name}
					</NavLink>
				))}

				<Redirect to="/library/playlists" />
			</ul>
		</nav>
	);
}

LibraryList.propTypes = {};

export default LibraryList;
