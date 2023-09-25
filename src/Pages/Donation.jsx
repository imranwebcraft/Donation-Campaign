import { useEffect, useState } from "react";

import SavedDonationCard from "../Components/SavedDonationCard/SavedDonationCard";

const Donation = () => {
	const [donations, setDonations] = useState([]);
	const [seeAll, setSeeAll] = useState(false);

	useEffect(() => {
		const savedDonations = JSON.parse(localStorage.getItem("donations"));
		setDonations(savedDonations);
		console.log(savedDonations);
	}, []);

	console.log(seeAll);
	console.log(donations?.length);

	return (
		<div className=" max-w-7xl mx-auto my-20">
			<div className=" grid gap-5 grid-cols-1 md:grid-cols-2">
				{seeAll
					? donations?.map((donation) => (
							<SavedDonationCard
								key={donation.id}
								donation={donation}
							></SavedDonationCard>
					  ))
					: donations
							?.slice(0, 4)
							.map((donation) => (
								<SavedDonationCard
									key={donation.id}
									donation={donation}
								></SavedDonationCard>
							))}
			</div>

			{donations?.length > 4 && (
				<div className="flex justify-center mt-10">
					{seeAll || (
						<button
							onClick={() => setSeeAll(!seeAll)}
							className="btn btn-success text-white"
						>
							See All
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Donation;
