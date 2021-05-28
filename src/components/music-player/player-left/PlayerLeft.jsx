import React from "react";
import PropTypes from "prop-types";

function PlayerLeft(props) {
	return (
		<div className="h-full text-gray-700 px-4 py-4 w-1/3 lg:w-1/4 mr-2">
			<div className="flex flex-wrap flex-row items-center h-full">
				<div className="w-10 h-6 xl:w-12 xl:h-8 bg-gray-400 mr-4"></div>
				<h2 className="uppercase text-white self-start text-sm xl:text-base">
					EL PROGRAMA DE LOS SIMIOS
				</h2>
			</div>
		</div>
	);
}

PlayerLeft.propTypes = {};

export default PlayerLeft;
