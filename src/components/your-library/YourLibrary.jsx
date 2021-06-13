import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { libraryRoutes } from "./../../containers/header/library-list/library-routes";
import Playlists from "./playlists/Playlists";

function YourLibrary(props) {
	return (
		<Suspense fallback="loading...">
			<Switch>
				{libraryRoutes.map(
					(route, index) =>
						route.component && (
							<Route
								key={index}
								exact={route.exact}
								path={route.path}
								component={Playlists}
								// component={route.component}
								// render={(props) => (
								// 	<>
								// 		<route.component {...props} />
								// 	</>
								// )}
							/>
						)
				)}
			</Switch>
		</Suspense>
	);
}

YourLibrary.propTypes = {};

export default YourLibrary;
