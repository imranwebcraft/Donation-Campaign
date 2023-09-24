import { useDonations } from "../../Hook/useDonations";
import DonationCard from "./DonationCard";

const Donations = () => {
	const donations = useDonations();
	return (
		<div className=" max-w-7xl mx-auto mt-24 mb-48">
			<div className=" grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
				{donations?.map((donation) => (
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
