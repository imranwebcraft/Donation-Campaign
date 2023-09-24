const DonationCard = ({ donation }) => {
	const { image, category, title, color } = donation;
	const { card_bg_color, category_bg_color, text_color } = color;

	return (
		<div>
			<div className="relative flex flex-col h-full rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
				<div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
					<img src={image} alt="ui/ux review check" />
				</div>
				<div className="p-6 mt-auto">
					<p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
						{category}
					</p>
					<h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
						{title}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;
