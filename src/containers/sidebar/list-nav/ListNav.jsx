import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavItem from "./nav-item/NavItem";
import { spotifyApi } from "./../../../apis/index";

function ListNav(props) {
	const [playLists, setPlayLists] = useState([]);

	const getPlayLists = async () => {
		return await spotifyApi
			.getPlayLists()
			.then((res) => setPlayLists(res.data.items))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPlayLists();
	}, []);

	return (
		<div className="side-lists max-h-full overflow-y-auto pl-5 pt-3 hide-scroll border-t-2 border-gray-800 fill-current">
			<div className="mb-10 last:mt-4">
				{playLists.map((item, index) => (
					<NavItem key={index} link={item.name} />
				))}
			</div>
		</div>
	);
}

ListNav.propTypes = {};

export default ListNav;
