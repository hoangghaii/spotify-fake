import React, { Component } from "react";

export const wrappedComponent = (WrappedComponent) => {
	return class extends Component {
		render() {
			return (
				<div className="max-h-full overflow-y-auto px-6 custom-scrollbar">
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
};
