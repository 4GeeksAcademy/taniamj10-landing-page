import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		</>	
	);
};

export default Home;
