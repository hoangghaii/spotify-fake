import React from "react";
import PropTypes from "prop-types";

function PlayerRight(props) {
	return (
		<div className="h-full text-gray-700 text-center px-6 py-2 w-1/3 lg:w-1/4">
			<div className="flex justify-end items-center h-full text-gray-200">
				<p className="text-xs xl:text-sm mr-3 lg:mr-6">1x</p>
				<svg
					className="fill-current h-5 w-5 lg:h-6 lg:w-6 mr-3 lg:mr-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path fill="none" d="M0 0h24v24H0V0z" />
					<path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z" />
				</svg>
				<svg
					className="fill-current h-4 w-4 lg:h-5 lg:w-5 mr-3 lg:mr-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
				</svg>
				<svg
					className="fill-current h-5 w-5 lg:h-6 lg:w-6 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M215.4 145.5c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L133.3 200H80.5c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.5zM447.5 256c0-59.3-23.2-114.8-65.4-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17 37.6 37.1 58.2 86.6 58.2 139.4 0 52.8-20.7 102.3-58.2 139.4-4.7 4.7-4.8 12.3-.1 17 2.3 2.4 5.4 3.6 8.5 3.6 3 0 6.1-1.2 8.4-3.5 42.3-41.6 65.5-97.2 65.5-156.5z" />
					<path d="M384.9 256c0-43.5-16.6-84.3-46.8-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.7 26.1 39.9 60.9 39.9 98.1 0 37.2-14.2 72-39.9 98.1-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 30.2-30.8 46.9-71.6 46.9-115.1z" />
					<path d="M287.5 182.5c-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 14.8 15 23 35.1 23 56.6 0 21.4-8.2 41.5-23 56.6-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 19.3-19.6 29.9-45.6 29.9-73.4.1-27.9-10.5-54-29.8-73.6z" />
				</svg>
				<div className="h-1 w-20 bg-gray-400 rounded-lg"></div>
			</div>
		</div>
	);
}

PlayerRight.propTypes = {};

export default PlayerRight;
