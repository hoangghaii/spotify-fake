import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { mainRoutes, secondRoutes } from "../../routes";

function AppContent(props) {
	const routes = [...mainRoutes, ...secondRoutes];

	return (
		<Suspense fallback="loading...">
			<Switch>
				{routes.map((route, index) => {
					return (
						route.component && (
							<Route
								key={index}
								path={route.path}
								name={route.name}
								exact={route.exact}
								render={(props) => (
									<>
										<route.component {...props} />
									</>
								)}
							/>
						)
					);
				})}

				<Redirect exact from="" to="/home" />
			</Switch>
		</Suspense>
	);
}

AppContent.propTypes = {};

export default AppContent;
