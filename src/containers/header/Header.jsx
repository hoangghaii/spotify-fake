import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { userApi } from "../../apis";
import { StorageKey } from "../../common/storage-key";

function Header(props) {
	const { isOpenUtilities } = props;
	const code = localStorage.getItem(StorageKey.CODE);

	const [user, setUser] = useState({
		display_name: "account",
		display_img: (
			<svg
				className="h-6 w-6 fill-current mr-2"
				xmlns="http://www.w3.org/2000/svg"
				fillRule="evenodd"
				clipRule="evenodd"
			>
				<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" />
			</svg>
		),
	});

	useEffect(() => {
		userApi
			.detailUser()
			.then((res) => {
				setUser({
					display_name: res.data.display_name,
					display_img: (
						<div
							style={{
								borderRadius: "50%",
								overflow: "hidden",
								width: "38px",
								height: "38px",
								marginRight: "10px",
							}}
						>
							<img
								src={res.data.images[0].url}
								alt={res.data.display_name}
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
						</div>
					),
				});
			})
			.catch((error) => console.log(error));
	}, [code]);

	return (
		<header className="flex justify-center items-center w-full p-4">
			<div className="flex h-full items-center w-1/2">
				<svg
					className="h-6 w-6 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
				</svg>
				<svg
					className="h-6 w-6 fill-current text-gray-500 ml-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
				</svg>
				{isOpenUtilities === "search" && (
					<div className="search__box">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 search__icon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							className="search__input bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-full px-4 appearance-none leading-normal text-gray-700 ml-4"
							type="text"
							placeholder="Artists, songs, or podcasts"
						/>
					</div>
				)}
			</div>

			<div className="flex items-center justify-end w-1/2 mr-8">
				{user.display_img}
				<span>{user.display_name}</span>
				<svg
					className="h-6 w-6 fill-current ml-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
				</svg>
			</div>
		</header>
	);
}

Header.propTypes = {
	isOpenUtilities: PropTypes.string,
};

Header.defaultProps = {
	isOpenUtilities: "",
};

export default Header;
