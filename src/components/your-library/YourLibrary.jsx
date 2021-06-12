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
			<h2>Playlists</h2>

			<div>
				{playLists.map((track, index) => (
					<Card key={index} track={track} />
				))}
			</div>
		</Aux>
	);
}

YourLibrary.propTypes = {};

export default wrappedComponent(YourLibrary);
