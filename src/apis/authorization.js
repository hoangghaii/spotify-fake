import axios from "axios";
import { StorageKey } from "../common/storage-key";
import queryString from "query-string";

const {
	REACT_APP_BASE_API,
	REACT_APP_CLIENT_ID,
	REACT_APP_CLIENT_SECRET,
	REACT_APP_REDIRECT_URL,
} = process.env;

export const authorization = {
	async authorization() {
		const code = localStorage.getItem(StorageKey.CODE);

		const config = {
			Authorization: `Basic ${btoa(
				REACT_APP_CLIENT_ID + ":" + REACT_APP_CLIENT_SECRET
			)}`,
			"Content-Type": "application/x-www-form-urlencoded",
		};

		const params = queryString.stringify({
			grant_type: "authorization_code",
			code: code,
			redirect_uri: REACT_APP_REDIRECT_URL,
		});

		try {
			const respon = axios({
				url: `${REACT_APP_BASE_API}api/token`,
				method: "POST",
				headers: config,
				data: params,
			});
			return respon;
		} catch (error) {
			return error;
		}
	},
};
