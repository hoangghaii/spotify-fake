import React from "react";
import PropTypes from "prop-types";
import PlayerItem from "../../containers/player-item/PlayerItem";

function PlayerContent(props) {
	//fake data
	const dataList = [
		{
			title: "El Programa de los Simios",
			subTitle:
				"Desde las entrañas del universo geek para el mundo: El Programa de los Simios...",
		},
		{
			title: "Your saved songs",
			subTitle: "",
		},
		{
			title: "El Programa de los Simios",
			subTitle:
				"Desde las entrañas del universo geek para el mundo: El Programa de los Simios...",
		},
		{
			title: "El Programa de los Simios",
			subTitle:
				"Desde las entrañas del universo geek para el mundo: El Programa de los Simios...",
		},
	];
	return (
		<div className="max-h-full overflow-y-auto px-12 py-6 mt-10 custom-scrollbar">
			<PlayerItem
				titleHeading="Recently played"
				subTitleHeading=""
				playerList={dataList}
			/>
			<PlayerItem
				titleHeading="Your top podcasts"
				subTitleHeading=""
				playerList={dataList}
			/>
			<PlayerItem
				titleHeading="Your heavy rotation"
				subTitleHeading="The music you're had on repeat this month."
				playerList={dataList}
			/>
			<PlayerItem
				titleHeading="Made for you"
				subTitleHeading="Get better recommendations the more you listen."
				playerList={dataList}
			/>
			<PlayerItem
				titleHeading="Based on your recent listening"
				subTitleHeading="Inspired by your recent activity."
				playerList={dataList}
			/>
			<PlayerItem
				titleHeading="Best of artists"
				subTitleHeading="Bringing together the top songs from an artist."
				playerList={dataList}
			/>
			<PlayerItem
				titleHeading="New releases for you"
				subTitleHeading="Brand new music from artists you love."
				playerList={dataList}
			/>
		</div>
	);
}

PlayerContent.propTypes = {};

export default PlayerContent;
