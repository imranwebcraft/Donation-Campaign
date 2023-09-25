import { useEffect, useState } from "react";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const Statistics = () => {
	const [userDonation, setUserDonation] = useState([]);

	const totalDonations = 12;
	const yourDonations = isNaN(userDonation) ? 0 : userDonation;

	useEffect(() => {
		const savedDonations = JSON.parse(localStorage.getItem("donations"));
		setUserDonation(savedDonations?.length);
	}, []);

	const data = [
		{
			name: "Total Donation",
			value: totalDonations,
		},
		{ name: "User Donation", value: yourDonations },
	];

	const COLORS = ["#FF444A", "#00C49F"];

	return (
		<div className="h-[70vh] flex justify-center items-center my-10">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={600} height={400}>
					<Pie
						data={data}
						dataKey="value"
						nameKey="name"
						outerRadius={100}
						fill="#8884d8"
						label={({ name, value }) =>
							`${name} (${(
								(value / totalDonations) *
								100
							).toFixed(1)}%)`
						}
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statistics;
