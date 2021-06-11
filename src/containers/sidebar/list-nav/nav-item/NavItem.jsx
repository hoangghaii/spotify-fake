import React from "react";
import PropTypes from "prop-types";

function NavItem(props) {
	const { link } = props;

	return (
		<p className="mb-2 text-sm tracking-wide text-gray-400 hover:text-white font-medium">
			{link}
		</p>
	);
}

NavItem.propTypes = {
	link: PropTypes.string,
};

export default NavItem;
