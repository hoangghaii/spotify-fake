import { lazy } from "react";

const Playlists = lazy(() =>
	import("../../../components/your-library/playlists/Playlists")
);
const Podcasts = lazy(() =>
	import("../../../components/your-library/podcasts/Podcasts")
);
const Artists = lazy(() =>
	import("../../../components/your-library/artists/Artists")
);
const Albums = lazy(() =>
	import("../../../components/your-library/albums/Albums")
);

export const libraryRoutes = [
	{
		path: "/library/playlists",
		name: "Playlists",
		exact: true,
		component: Playlists,
	},
	{
		path: "/library/podcasts",
		name: "Podcasts",
		exact: true,
		component: Podcasts,
	},
	{
		path: "/library/artists",
		name: "Artists",
		exact: true,
		component: Artists,
	},
	{
		path: "/library/albums",
		name: "Albums",
		exact: true,
		component: Albums,
	},
];
