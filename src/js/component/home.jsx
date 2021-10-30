import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Main from "./main.jsx";
import BodyUp from "./body-up.jsx";
import BodyDown from "./body-down.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex flex-column mt-0">
			<Main />
			<BodyUp />
			<div className="container d-flex flex-column align-items-center flex-lg-row justify-content-lg-between">
				<BodyDown img="http://lorempixel.com/400/200" />
				<BodyDown img="http://lorempixel.com/g/400/200" />
				<BodyDown img="http://lorempixel.com/400/200/sports" />
				<BodyDown img="http://lorempixel.com/400/200/sports/1" />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
