import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PlayerItem } from "../../containers/index";
import { Aux, wrappedComponent } from "./../../hoc/index";
import { spotifyApi } from "../../apis";
import moment from "moment";

function Home(props) {
	const [newReleases, setNewReleases] = useState();
	const [recentlyPlayed, setRecentlyPlayed] = useState([]);

	const getNewReleases = async () => {
		return await spotifyApi
			.getNewReleases()
			.then((res) => setNewReleases(res.data.albums.items[0]))
			.catch((err) => console.log(err));
	};

	const getRecentlyPlayed = async () => {
		return await spotifyApi
			.getRecentlyPlayed()
			.then((res) => setRecentlyPlayed(res.data.items))
			.catch((err) => console.log(err));
	};

	const getAllFeaturedPlaylists = async () => {
		return await spotifyApi
			.getAllFeaturedPlaylists()
			.then((res) => setRecentlyPlayed(res.data.items))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getNewReleases();
		getRecentlyPlayed();
		// getAllFeaturedPlaylists();
	}, []);

	const currentHour = parseInt(moment().format("HH"));
	let currentSessionDate = "";
	if (currentHour >= 6 && currentHour < 12) currentSessionDate = "Morning";
	else if (currentHour >= 12 && currentHour < 18)
		currentSessionDate = "Afternoon";
	else if (currentHour >= 18 && currentHour < 24)
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
			<div className="flex flex-row items-center">
				{recentlyPlayed.map((track) => (
					<div className="library__playlist w-23 h-72 mr-4 mb-4 p-4 bg-gray-900 hover:bg-gray-700 transition-all shadow rounded-md">
						<div className="relative h-40 mb-6">
							{track.track.album.images.length > 0 ? (
								<div className="h-full">
									<img
										src={track.track.album.images[0].url}
										className="object-cover h-full"
										alt={track.track.name}
									/>
								</div>
							) : (
								<div className="bg-gray-600"></div>
							)}

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="library__player-icon"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									style={{ color: "#05ce91" }}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
								/>
								<path
									style={{ color: "#05ce91" }}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>

						<h3 className="text-white font-bold text-base ellipsis">
							{track.track.name}
						</h3>
						<h4 className="text-gray-400 text-sm font-medium capitalize ellipsis">
							{track.track.album.album_type}
						</h4>
					</div>
				))}
			</div>

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
