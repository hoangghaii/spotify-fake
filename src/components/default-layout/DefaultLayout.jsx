import React, { useState } from "react";
import PropTypes from "prop-types";
import { FriendActivity, Header, SideBar } from "../../containers/index";
import { MusicPlayer, AppContent } from "../index";

function DefaultLayout(props) {
	const [isOpenUtilities, setIsOpenUtilities] = useState("");

	const onOpenUtilities = (value) => {
		setIsOpenUtilities(value);
	};

	return (
		<div className="max-w-full w-full h-screen overflow-hidden">
			<div className="flex h-full w-full aside-container">
				<aside className="h-full w-1/6 xl:w-1/6 bg-gray-900 text-gray-200">
					<SideBar handleOpenUtilities={onOpenUtilities} />
				</aside>

				<main className="flex flex-col h-full w-62 xl:w-62 bg-gray-800 text-gray-200">
					<Header isOpenUtilities={isOpenUtilities} />
					<AppContent />
				</main>

				<aside className="h-full w-22 xl:w-22 bg-gray-900 text-gray-200">
					<FriendActivity />
				</aside>
			</div>

			<div className="w-full bg-gray-700 text-white player-container">
				<MusicPlayer />
			</div>
		</div>
	);
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
