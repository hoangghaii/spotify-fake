import React, { Component } from "react";

export const wrappedComponent = (WrappedComponent) => {
	return class extends Component {
		render() {
			return (
				<div className="max-h-full overflow-y-auto px-12 py-6 mt-10 custom-scrollbar">
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
};
