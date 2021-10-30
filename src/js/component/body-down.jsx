import React from "react";
import PropTypes from "prop-types";

const BodyDown = props => {
	return (
		<div className="card text-center mb-4" style={{ width: "18rem" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card&apos;s content.
				</p>
				<a href="#" className="btn btn-secondary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

BodyDown.propTypes = {
	img: PropTypes.string
};

export default BodyDown;
