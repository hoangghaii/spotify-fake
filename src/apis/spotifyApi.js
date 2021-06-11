import axiosAuthClient from "./axiosAuthClient";

const spotifyApi = {
	async getPlayLists() {
		const url = "v1/me/playlists";

		try {
			const res = axiosAuthClient.get(url);
			return res;
		} catch (error) {
			return error;
		}
	},

	async getFollowing() {
		const url = "v1/me/following";
		const params = {
			type: "artist",
		};

		try {
			const res = axiosAuthClient.get(url, { params: params });
			return res;
		} catch (error) {
			return error;
		}
	},
};

export default spotifyApi;
