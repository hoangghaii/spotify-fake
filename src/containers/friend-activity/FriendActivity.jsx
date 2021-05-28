import React from "react";
import PropTypes from "prop-types";

function FriendActivity(props) {
	return (
		<div className="p-4">
			<h3 className="text-xl font-semibold mb-4">Friend activity</h3>

			<p className="text-base">
				Connect with Facebook to see what your friends are playing
			</p>

			<button className="my-6 block bg-blue-500 py-2 px-6 rounded-full text-sm font-bold uppercase">
				Connect with facebook
			</button>

			<span className="text-sm leading-none">
				We'll never post anything without your permission. Show and hide
				Friend Activity from Settings
			</span>
		</div>
	);
}

FriendActivity.propTypes = {};

export default FriendActivity;
