import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { spotifyApi } from "../../../apis";
import { Aux, wrappedComponent } from "../../../hoc/index";
import ArtitstCard from "./artist-card/ArtitstCard";

function Artists(props) {
	const [artists, setArtists] = useState([]);

	const getArtists = async () => {
		return spotifyApi
			.getArtists()
			.then((res) => setArtists(res.data.artists.items))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getArtists();
	}, []);

	return (
		<Aux>
			<h3 className="text-3xl font-bold mb-6">Artists</h3>

			<div className="flex items-center flex-wrap">
				{artists.map((artist) => (
					<ArtitstCard key={artist.id} artist={artist} />
				))}
			</div>
		</Aux>
	);
}

Artists.propTypes = {};

export default wrappedComponent(Artists);
