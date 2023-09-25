import { useEffect, useState } from "react";
import image from "../assets/images/Nodata.jpg";
import SavedDonationCard from "../Components/SavedDonationCard/SavedDonationCard";

const Donation = () => {
	const [donations, setDonations] = useState([]);
	const [seeAll, setSeeAll] = useState(false);
	const [noDonationFound, setNoDonationFound] = useState("");

	useEffect(() => {
		const savedDonations = JSON.parse(localStorage.getItem("donations"));
		if (savedDonations) {
			setDonations(savedDonations);
			return;
		} else {
			setNoDonationFound("You have not made any donation yet");
		}
	}, []);

	console.log(donations?.length); // null

	return (
		<div className=" max-w-7xl mx-auto my-20">
			{noDonationFound && (
				<div className=" flex flex-col h-[60vh]  justify-center items-center">
					<div>
						<img
							className=" h-[250px] w-[250px]"
							src={image}
							alt="no data found logo"
						/>
					</div>
					<p className=" text-2xl font-semibold">{noDonationFound}</p>
				</div>
			)}

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
							className="bg-indigo-500 px-4 py-3 text-white font-semibold rounded hover:bg-indigo-400 duration-300"
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
