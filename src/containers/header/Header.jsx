import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { userApi } from "../../apis";
import { StorageKey } from "../../common/storage-key";
import SearchBox from "./search-box/SearchBox";
import LibraryList from "./library-list/LibraryList";

function Header(props) {
	const { isOpenUtilities } = props;
	const code = localStorage.getItem(StorageKey.CODE);

	const [user, setUser] = useState({
		display_name: "User",
		display_img: (
			<div className="user__image">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="bg-white"
					style={{ width: "36px", height: "36px" }}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1}
						d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		),
	});

	useEffect(() => {
		userApi
			.detailUser()
			.then((res) => {
				console.log(res);
				localStorage.setItem(StorageKey.USER_ID, res.data.id);
				setUser({
					display_name: res.data.display_name,
					display_img: (
						<div className="user__image">
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
		<header className="flex justify-between items-center w-full p-4">
			<div className="flex h-full items-center">
				<div className="arrow-icon__box">
					<svg
						className="arrow-icon fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
					</svg>
				</div>

				<div className="arrow-icon__box">
					<svg
						className="arrow-icon fill-current text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
					</svg>
				</div>

				{isOpenUtilities === "search" && <SearchBox />}
				{isOpenUtilities === "your library" && <LibraryList />}
			</div>

			<div className="user flex items-center justify-end mr-8">
				{user.display_img}
				<div className="user__dropdown">
					<span className="user__name">{user.display_name}</span>
					<svg
						className="user__dropdown-icon fill-current ml-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
					</svg>
				</div>
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
