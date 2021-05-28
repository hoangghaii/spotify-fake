import React from "react";
import PropTypes from "prop-types";

function NavItem(props) {
	const { title, links } = props;

	return (
		<div className="mb-10 last:mt-4">
			{title && (
				<h2 className="uppercase text-xs text-gray-400 tracking-widest mb-2">
					{title}
				</h2>
			)}
			{links &&
				links.map((link, index) => {
					return (
						<p
							key={index}
							className="mb-2 text-sm tracking-wide text-gray-400 hover:text-white font-medium"
						>
							{link}
						</p>
					);
				})}
		</div>
	);
}

NavItem.propTypes = {
	title: PropTypes.string,
	links: PropTypes.array,
};

export default NavItem;
