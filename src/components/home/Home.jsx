import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PlayerItem } from "../../containers/index";
import { Aux, wrappedComponent } from "./../../hoc/index";
import { spotifyApi } from "../../apis";
import moment from "moment";

function Home(props) {
	const [newReleases, setNewReleases] = useState();

	const getNewReleases = async () => {
		return await spotifyApi
			.getNewReleases()
			.then((res) => setNewReleases(res.data.albums.items[0]))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getNewReleases();
	}, []);

	const currentHour = parseInt(moment().format("HH"));
	let currentSessionDate = "";
	if (currentHour > 6 && currentHour < 12) currentSessionDate = "Morning";
	else if (currentHour > 13 && currentHour < 17)
		currentSessionDate = "Afternoon";
	else if (currentHour > 18 && currentHour < 23)
		currentSessionDate = "Evening";
	else currentSessionDate = "Night";

	return (
		<Aux>
			<div className="h-72 w-full mb-6">
				{newReleases ? (
					<img
						src={newReleases.images[0].url}
						className="object-cover w-full h-full"
						alt={newReleases.name}
					/>
				) : (
					<div className="bg-gray-600" />
				)}
			</div>

			<h3 className="text-3xl font-bold mb-6">
				Good {currentSessionDate}
			</h3>

			<h4 className="text-2xl font-bold mb-6">Recently played</h4>

			<p className="text-base text-gray-400 mb-6">
				Podcasts we think you'll get hooked on.
			</p>

			<h4 className="text-2xl font-bold">Made for you</h4>
			<p className="text-sm text-gray-400 mb-6">
				Get better recommendations the more you listen.
			</p>

			<h4 className="text-2xl font-bold mb-6">Jump back in</h4>

			<h4 className="text-2xl font-bold">
				Based on your recent listening
			</h4>
			<p className="text-sm text-gray-400 mb-6">
				Inspired by your recent activity.
			</p>

			<h4 className="text-2xl font-bold mb-6">Your favorite artists</h4>

			<h4 className="text-2xl font-bold mb-6">Spotify's selection</h4>

			<h4 className="text-2xl font-bold">Suggested artists</h4>
			<p className="text-sm text-gray-400 mb-6">
				Inspired by your recent activity.
			</p>
		</Aux>
	);
}

Home.propTypes = {};

export default wrappedComponent(Home);
