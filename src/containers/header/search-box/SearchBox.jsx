import React from "react";
import PropTypes from "prop-types";

function SearchBox(props) {
	return (
		<div className="search__box">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 search__icon"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<input
				className="search__input bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-full px-4 appearance-none leading-normal text-gray-700 ml-4"
				type="text"
				placeholder="Artists, songs, or podcasts"
			/>
		</div>
	);
}

SearchBox.propTypes = {};

export default SearchBox;
