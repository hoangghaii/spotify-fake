import React from "react";
import PropTypes from "prop-types";

function NavItem(props) {
	const { links } = props;

	return (
		<div className="mb-10 last:mt-4">
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
	links: PropTypes.array,
};

export default NavItem;
