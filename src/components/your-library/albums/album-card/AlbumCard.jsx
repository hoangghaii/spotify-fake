import React from "react";
import PropTypes from "prop-types";

function AlbumCard(props) {
	const { album } = props;

	return (
		<div className="library__playlist w-23 h-72 mr-4 mb-4 p-4 bg-gray-900 hover:bg-gray-700 transition-all shadow rounded-md">
			<div className="relative h-40 mb-6">
				{album.images.length > 0 ? (
					<div className="h-full">
						<img
							src={album.images[0].url}
							className="object-cover h-full"
							alt={album.name}
						/>
					</div>
				) : (
					<div className="bg-gray-600"></div>
				)}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="library__player-icon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						style={{ color: "#05ce91" }}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
					/>
					<path
						style={{ color: "#05ce91" }}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>

			<h3 className="text-white font-bold text-base ellipsis">
				{album.name}
			</h3>
			<h4 className="text-gray-400 text-sm font-medium capitalize ellipsis">
				{album.artists[0].name}
			</h4>
		</div>
	);
}

AlbumCard.propTypes = {
	album: PropTypes.object,
};

export default AlbumCard;
