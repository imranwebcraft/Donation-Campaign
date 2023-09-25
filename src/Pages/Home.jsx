import { useState } from "react";
import Donations from "../Components/Donations/Donations";
import Banner from "../Components/Header/Banner";

const Home = () => {
	const [searchText, setSearchText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("Submitted");
		// console.log(e.target.search.value);
		setSearchText(e.target.search.value);
	};

	return (
		<div>
			<Banner handleSubmit={handleSubmit}></Banner>
			<Donations searchText={searchText}></Donations>
		</div>
	);
};

export default Home;
