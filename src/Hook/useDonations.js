import { useEffect, useState } from "react";

export const useDonations = () => {
	const [donations, setDonations] = useState([]);
	useEffect(() => {
		fetch("/donations.json")
			.then((res) => res.json())
			.then((data) => setDonations(data));
	}, []);

	return donations;
};
