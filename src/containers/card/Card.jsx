import PropTypes from "prop-types";
import React from "react";

function Card(props) {
	const { content, classname } = props;

	return (
		<div className={classname}>
			<div className="relative h-40 mb-6">
				{content.images.length > 0 ? (
					<div className="h-full">
						<img
							src={content.images[0].url}
							className="object-cover h-full"
							alt={content.name}
						/>
					</div>
				) : (
					<div className="bg-gray-600 h-full"></div>
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
				{content.name}
			</h3>
			{content.description ? (
				<h4 className="text-gray-400 text-sm font-medium ellipsis-line">
					{content.description}
				</h4>
			) : (
				<h4 className="text-gray-400 text-sm font-medium">
					By {content.owner.display_name}
				</h4>
			)}
		</div>
	);
}

Card.propTypes = {
	content: PropTypes.object,
	classname: PropTypes.string,
};

Card.defaultProps = {
	content: null,
	classname: "",
};

export default Card;
