import React from "react";
import PropTypes from "prop-types";
import { Aux, wrappedComponent } from "../../../hoc/index";

function Podcasts(props) {
	return (
		<Aux>
			<div className="h-full text-center flex flex-col justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-16 w-16 mx-auto mb-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
					/>
				</svg>
				<h3 className="text-3xl font-bold mb-1.5">
					Follow your first podcasts
				</h3>
				<span className="font-medium block mb-7">
					Follow podcasts you like by tapping the follow button
				</span>
				<button
					className="outline-non focus:outline-non hover:underline block bg-white py-2 px-8 mx-auto rounded-full text-sm text-gray-700 font-bold font-base uppercase tracking-widest"
					type="button"
				>
					Find podcasts
				</button>
			</div>
		</Aux>
	);
}

Podcasts.propTypes = {};

export default wrappedComponent(Podcasts);
