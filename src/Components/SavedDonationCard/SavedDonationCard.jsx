const SavedDonationCard = ({ donation }) => {
	const { image, category, title, color, donate_ammount } = donation || {};
	const { card_bg_color, category_bg_color, text_color } = color || {};

	const cardBgStyle = {
		backgroundColor: card_bg_color,
	};
	const categoryBgStyle = {
		backgroundColor: category_bg_color,
	};

	const textColorStyle = {
		color: text_color,
	};

	const viewDetailsBg = {
		backgroundColor: text_color,
	};
	return (
		<div>
			<div
				className="grid grid-cols-5 h-full rounded-lg text-gray-700 shadow-md"
				style={cardBgStyle}
			>
				{/* Image */}
				<div className="col-span-2 h-auto">
					<img
						className=" w-full h-full rounded-md rounded-r-none"
						src={image}
						alt={category}
					/>
				</div>
				<div className="col-span-3 p-6">
					{/* Category */}
					<div
						style={categoryBgStyle}
						className=" px-3 py-2 inline-block rounded-md"
					>
						<p
							style={textColorStyle}
							className="text-sm font-semibold"
						>
							{category}
						</p>
					</div>

					{/* Title */}
					<div className=" mt-2">
						<h4 className="text-2xl text-gray-800 font-semibold">
							{title}
						</h4>
					</div>
					{/* Donaet Ammout */}
					<div className="">
						<h4
							className="text-xl  font-semibold"
							style={textColorStyle}
						>
							$ {donate_ammount}.00
						</h4>
					</div>

					{/* View Details Btn */}
					<div
						style={viewDetailsBg}
						className="inline-block rounded-md mt-5"
					>
						<button className="px-4 rounded-md py-3 text-center text-white">
							View Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SavedDonationCard;
