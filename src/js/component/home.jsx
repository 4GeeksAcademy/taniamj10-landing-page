import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col-3"><Card />
				</div>
				<div className="col-3"><Card />
				</div>
				<div className="col-3"><Card />
				</div>
				<div className="col-3"><Card />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
