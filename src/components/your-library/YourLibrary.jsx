import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Aux, wrappedComponent } from "./../../hoc/index";
import { spotifyApi } from "../../apis/index";
import { Card } from "./../../containers/index";

function YourLibrary(props) {
	const [likedSongs, setLikedSongs] = useState([]);
	const [playLists, setPlayLists] = useState([]);

	const getPlayLists = async () => {
		return await spotifyApi
			.getPlayLists()
			.then((res) => setPlayLists(res.data.items))
			.catch((err) => console.log(err));
	};

	const getLikedSongs = async () => {
		return await spotifyApi
			.getLikedSongs()
			.then((res) => setLikedSongs(res.data.items))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPlayLists();
		getLikedSongs();
	}, []);

	console.log("likedSongs: ", likedSongs);
	console.log("playLists: ", playLists);

	return (
		<Aux>
			<h3 className="text-3xl font-bold mb-6">Playlists</h3>

			<div className="library">
				<div className="px-6 pt-20 mr-4 mb-4 w-46 h-72 shadow rounded-md bg-gradient-to-br from-indigo-700 to-indigo-300 library__likedsongs">
					<div className="ellipsis-line-3">
						{likedSongs.map((song, index) => (
							<span key={index}>
								<span className="font-bold">
									{song.track.artists[0].name}
								</span>
								<span className="text-gray-300">
									{" " + song.track.name}
								</span>
								<span> &bull; </span>
							</span>
						))}
					</div>

					<div className="mt-8">
						<h2 className="text-4xl font-bold mb-2 text-white">
							Liked Songs
						</h2>
						<p className="text-sm font-bold">
							{likedSongs.length} liked songs
						</p>
					</div>

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

				{playLists.map((track, index) => (
					<Card
						classname="library__playlist w-23 h-72 mr-4 mb-4 p-4 bg-gray-900 hover:bg-gray-700 transition-all shadow rounded-md"
						key={index}
						track={track}
					/>
				))}
			</div>
		</Aux>
	);
}

YourLibrary.propTypes = {};

export default wrappedComponent(YourLibrary);
