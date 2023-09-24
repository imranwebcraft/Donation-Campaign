const DonationCard = ({ donation }) => {
	const { image, category, title, color } = donation || {};
	const { card_bg_color, category_bg_color, text_color } = color || {};

	const cardBgStyle = {
		backgroundColor: card_bg_color,
	};

	console.log(category_bg_color);

	const categoryBgStyle = {
		backgroundColor: category_bg_color,
	};

	const textColorStyle = {
		color: text_color,
	};

	console.log(cardBgStyle);

	return (
		<div>
			<div
				className="flex flex-col h-full rounded-lg text-gray-700 shadow-md"
				style={cardBgStyle}
			>
				<div className={` ${category_bg_color} `}>
					<img src={image} alt={category} />
				</div>
				<div className="p-6">
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

					<div className=" mt-2">
						<h4
							className="text-xl  font-semibold"
							style={textColorStyle}
						>
							{title}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;