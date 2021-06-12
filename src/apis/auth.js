const {
	REACT_APP_BASE_AUTHORIZE_URL,
	REACT_APP_CLIENT_ID,
	REACT_APP_REDIRECT_URL,
} = process.env;

const scopeApi =
	"user-read-recently-played%20user-top-read%20user-read-playback-position%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20playlist-modify-public%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20user-follow-modify%20user-follow-read%20user-library-modify%20user-library-read";

export const loginUrl = `${REACT_APP_BASE_AUTHORIZE_URL}authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&state=34fFs29kd09&scope=${scopeApi}&show_dialog=true`;
