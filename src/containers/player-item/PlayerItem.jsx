import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Heading from "./../heading/Heading";
import Card from "./../card/Card";

function PlayerItem(props) {
	const { titleHeading, subTitleHeading, playerList } = props;
	return (
		<Fragment>
			<Heading title={titleHeading} subtitle={subTitleHeading} />
			<div className="flex mb-16 mt-4">
				{playerList.map((player, index) => (
					<Card
						key={index}
						title={player.title}
						subtitle={player.subTitle}
					/>
				))}
			</div>
		</Fragment>
	);
}

PlayerItem.propTypes = {
	titleHeading: PropTypes.string,
	subTitleHeading: PropTypes.string,
	playerList: PropTypes.array,
};

export default PlayerItem;
