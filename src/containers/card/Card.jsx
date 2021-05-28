import PropTypes from "prop-types";
import React from "react";

function Card(props) {
	const { title, subtitle } = props;

	return (
		<div className="w-1/4 xl:w-1/4 mr-4">
			<div className="bg-gray-400 h-48 mb-2"></div>

			<h3 className="text-white font-bold text-sm ellipsis">{title}</h3>
			{subtitle && (
				<h4 className="text-gray-400 text-sm font-medium ellipsis-line">
					{subtitle}
				</h4>
			)}
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default Card;
