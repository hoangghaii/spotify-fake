import axiosAuthClient from "./axiosAuthClient";

const userApi = {
	async detailUser() {
		const url = "v1/me";

		try {
			const res = axiosAuthClient.get(url);
			return res;
		} catch (error) {
			return error;
		}
	},
};

export default userApi;
