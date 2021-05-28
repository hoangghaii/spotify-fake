import React from "react";
import PropTypes from "prop-types";

function PlayerCenter(props) {
	return (
		<div className="flex flex-wrap h-full text-center px-4 py-2 w-1/3 lg:w-2/4 mr-2 text-gray-400">
			<div className="flex flex-wrap items-center justify-center text-center w-full h-auto">
				<svg
					className="fill-current h-3 w-3 mr-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
				</svg>
				<svg
					className="fill-current h-4 w-4 mr-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M175 100v137.8L403.9 98.1c5.3-3.1 12.1.7 12.1 6.9v302c0 6.2-6.7 10-12.1 6.9L175 274.2V412c0 2.2-1.8 4-4 4h-71c-2.2 0-4-1.8-4-4V100c0-2.2 1.8-4 4-4h71c2.2 0 4 1.8 4 4z" />
				</svg>
				<svg
					className="fill-current h-8 w-8 mr-6 text-gray-200"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
				</svg>
				<svg
					className="fill-current h-4 w-4 mr-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z" />
				</svg>
				<svg
					className="fill-current h-3 w-3"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M10.573 3.021h7.427v-3.021l6 5.39-6 5.61v-3h-7.427c-3.071 0-5.561 2.356-5.561 5.427 0 3.071 2.489 5.573 5.561 5.573h7.427v5h-7.427c-5.84 0-10.573-4.734-10.573-10.573s4.733-10.406 10.573-10.406z" />
				</svg>
			</div>
			<div className="flex flex-wrap items-center w-full h-auto">
				<span className="w-2/12 text-right text-sm lg:text-base pr-2 lg:pr-4">
					0:00
				</span>
				<div className="h-1 w-8/12 bg-gray-600 rounded-lg"></div>
				<span className="w-2/12 text-left text-sm lg:text-base pl-2 lg:pl-4">
					110:28
				</span>
			</div>
		</div>
	);
}

PlayerCenter.propTypes = {};

export default PlayerCenter;
