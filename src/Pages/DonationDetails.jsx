import { useParams } from "react-router-dom";
import { useDonations } from "../Hook/useDonations";
import { useEffect, useState } from "react";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
	const [donation, setDonation] = useState([]);
	const donations = useDonations();
	const { id } = useParams();
	const idNumber = parseInt(id);

	useEffect(() => {
		const findDonation = donations.find(
			(donation) => donation.id === idNumber,
		);
		setDonation(findDonation);
	}, [donations, idNumber]);

	console.log(donation);

	return (
		<div className=" max-w-7xl mx-auto mt-10">
			<DonationDetailsCard donation={donation}></DonationDetailsCard>
		</div>
	);
};

export default DonationDetails;
