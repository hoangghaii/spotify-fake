import React from "react";
import MusicPlayer from "./components/music-player/MusicPlayer";
import PlayerContent from "./components/player-content/PlayerContent";
import FriendActivity from "./containers/friend-activity/FriendActivity";
import Header from "./containers/header/Header";
import SideBar from "./containers/sidebar/SideBar";

function App() {
	return (
		<div className="max-w-full w-full h-screen overflow-hidden">
			<div className="flex h-full w-full aside-container">
				<aside className="h-full w-1/6 xl:w-1/6 bg-gray-900 text-gray-200">
					<SideBar />
				</aside>

				<main className="flex flex-col h-full w-62 xl:w-62 bg-gray-800 text-gray-200">
					<Header />
					<PlayerContent />
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

export default App;
