import PropTypes from "prop-types";
import React from "react";

function Card(props) {
	const { track } = props;

	return (
		<div className="w-1/4 xl:w-1/4 mr-4">
			{track.images.length > 0 ? (
				<div className="h-48">
					<img
						src={track.images[0].url}
						className="object-cover"
						alt={track.name}
					/>
				</div>
			) : (
				<div className="bg-gray-400 h-48"></div>
			)}

			<h3 className="text-white font-bold text-sm ellipsis">
				{track.name}
			</h3>
			{track.description && (
				<h4 className="text-gray-400 text-sm font-medium ellipsis-line">
					{track.description}
				</h4>
			)}
		</div>
	);
}

Card.propTypes = {
	track: PropTypes.object,
};

export default Card;
