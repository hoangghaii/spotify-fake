import React from "react";
import PropTypes from "prop-types";
import PlayerLeft from "./player-left/PlayerLeft";
import PlayerRight from "./player-right/PlayerRight";
import PlayerCenter from "./player-center/PlayerCenter";

function MusicPlayer(props) {
	return (
		<div className="flex h-full items-center justify-between">
			<PlayerLeft />

			<PlayerCenter />

			<PlayerRight />
		</div>
	);
}

MusicPlayer.propTypes = {};

export default MusicPlayer;
