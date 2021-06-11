import queryString from "query-string";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { authorization } from "./apis";
import { StorageKey } from "./common/storage-key";

const DefaultLayout = lazy(() =>
	import("./components/default-layout/DefaultLayout")
);
const PageNotFound = lazy(() =>
	import("./components/page-not-found/PageNotFound")
);

function App() {
	const code = queryString.parse(window.location.search).code;

	const getAuthorization = async () => {
		return await authorization
			.authorization()
			.then((res) => {
				localStorage.setItem(
					StorageKey.ACCESS_TOKEN,
					res.data.access_token
				);
				localStorage.setItem(
					StorageKey.REFRESH_TOKEN,
					res.data.refresh_token
				);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getAuthorization();
		localStorage.setItem(StorageKey.CODE, code);
	}, [code]);

	// if (code) {
	// 	localStorage.setItem(StorageKey.CODE, code);

	// 	getAuthorization();
	// }

	return (
		<Router>
			<Suspense fallback="loading...">
				<Switch>
					<Route path="" exact>
						<DefaultLayout code={code} />
					</Route>

					<Route component={PageNotFound} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
