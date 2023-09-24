import "./banner.css";

const Banner = () => {
	return (
		<div className="w-full relative">
			<div className="bg h-[70vh] w-full"></div>
			<div className=" flex flex-col items-center absolute  left-[8%] md:left-[20%] top-[35%] lg:left-[30%]">
				<h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-center">
					I Grow By Helping People In Need
				</h1>
				<div className="flex items-center mt-5">
					<input
						type="text"
						placeholder="Search..."
						className="border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none focus:border-rose-500"
					/>
					<input
						type="submit"
						value="Search"
						className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-r-md transition duration-300 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
