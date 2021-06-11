const {
	REACT_APP_BASE_AUTHORIZE_URL,
	REACT_APP_CLIENT_ID,
	REACT_APP_REDIRECT_URL,
	REACT_APP_SCOPE_API,
} = process.env;

export const loginUrl = `${REACT_APP_BASE_AUTHORIZE_URL}authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${REACT_APP_SCOPE_API}`;
