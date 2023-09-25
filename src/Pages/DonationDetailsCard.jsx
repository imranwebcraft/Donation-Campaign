import Swal from "sweetalert2";

const DonationDetailsCard = ({ donation }) => {
	const { id, image, donate_ammount, description, title, color } =
		donation || {};
	const { text_color } = color || {};

	const textColorStyle = {
		backgroundColor: text_color,
	};

	const handleDonaet = () => {
		const donationArray = [];

		const getSavedItems = JSON.parse(localStorage.getItem("donations"));
		if (!getSavedItems) {
			donationArray.push(donation);
			localStorage.setItem("donations", JSON.stringify(donationArray));
			Swal.fire({
				icon: "success",
				title: "Donation Successful",
				text: "Thank you for your donation!",
			});
		} else {
			const findDuplicate = getSavedItems.find((item) => item.id === id);
			if (!findDuplicate) {
				donationArray.push(...getSavedItems, donation);
				localStorage.setItem(
					"donations",
					JSON.stringify(donationArray),
				);

				Swal.fire({
					icon: "success",
					title: "Donation Successful",
					text: "Thank you for your donation!",
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Already Donate",
					text: "Thank you for your donation!",
				});
			}
		}
	};

	return (
		<div className="card min-h-[80vh] card-compact">
			<figure>
				<img className=" w-full rounded-lg" src={image} alt="image" />
			</figure>
			{/* Oerlay Div */}
			<div className=" bg-[#0B0B0B80] -mt-[80px] h-20 rounded-b-lg"></div>
			{/* Btn Div */}
			<div className=" -mt-[62px]">
				<button
					onClick={handleDonaet}
					style={textColorStyle}
					className="inline-block ml-5 px-4 rounded-md py-3 text-center text-white"
				>
					Donate $ {donate_ammount}
				</button>
			</div>

			<div className="card-body space-y-2">
				<h2 className="card-title text-4xl mt-10">{title}</h2>
				<p className=" text-base leading-7 text-gray-600">
					{description}
				</p>
			</div>
		</div>
	);
};

export default DonationDetailsCard;
