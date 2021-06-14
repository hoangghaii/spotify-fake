import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { spotifyApi } from "../../../apis";
import { Aux, wrappedComponent } from "../../../hoc/index";
import AlbumCard from "./album-card/AlbumCard";

function Albums(props) {
	const [albums, setAlbums] = useState([]);

	const getAlbums = async () => {
		return await spotifyApi
			.getAlbums()
			.then((res) => setAlbums(res.data.items))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getAlbums();
	}, []);

	return (
		<Aux>
			<h3 className="text-3xl font-bold mb-6">Albums</h3>

			<div className="flex items-center flex-wrap">
				{albums.map((album) => (
					<AlbumCard key={album.album.id} album={album.album} />
				))}
			</div>
		</Aux>
	);
}

Albums.propTypes = {};

export default wrappedComponent(Albums);
