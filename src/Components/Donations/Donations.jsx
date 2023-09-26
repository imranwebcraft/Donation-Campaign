import { useEffect, useState } from "react";
import { useDonations } from "../../Hook/useDonations";
import DonationCard from "./DonationCard";

const Donations = ({ searchText }) => {
	const [searchDonation, setSearchDonation] = useState([]);
	const donations = useDonations();

	useEffect(() => {
		{
			if (searchText) {
				const findSearchDonations = donations.filter((donation) =>
					donation.category
						.toLowerCase()
						.includes(searchText.toLowerCase()),
				);
				setSearchDonation(findSearchDonations);
			} else {
				setSearchDonation(donations);
			}
		}
	}, [donations, searchText]);

	return (
		<div className=" max-w-7xl mx-auto mb-48 mt-28">
			{searchDonation.length === 0 && (
				<div className=" flex gap-5 flex-col text-center justify-center items-center">
					<h1 className=" text-2xl font-semibold">
						Please type category name correctly&#128533;&#128533;
					</h1>
				</div>
			)}
			<div className=" grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
				{searchDonation?.map((donation) => (
					<DonationCard
						key={donation.id}
						donation={donation}
					></DonationCard>
				))}
			</div>
		</div>
	);
};

export default Donations;
