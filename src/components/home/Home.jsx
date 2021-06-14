import React from "react";
import PropTypes from "prop-types";
import { PlayerItem } from "../../containers/index";
import { Aux, wrappedComponent } from "./../../hoc/index";

function Home(props) {
	return (
		<Aux>
			Home
			{/* <PlayerItem
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
			/> */}
		</Aux>
	);
}

Home.propTypes = {};

export default wrappedComponent(Home);
