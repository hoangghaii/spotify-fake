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

	async getLikedSongs() {
		const url = "v1/me/tracks";

		try {
			const res = axiosAuthClient.get(url);
			return res;
		} catch (error) {
			return error;
		}
	},

	async getArtists() {
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

	async getAlbums() {
		const url = "v1/me/albums";

		try {
			const res = axiosAuthClient.get(url);
			return res;
		} catch (error) {
			return error;
		}
	},

	async getNewReleases() {
		const url = "v1/browse/new-releases";
		const params = {
			limit: 1,
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
