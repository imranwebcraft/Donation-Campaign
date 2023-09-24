import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import DonationDetails from "../Pages/DonationDetails";

const myRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				// loader: () => fetch("/donations.json"),
			},
			{
				path: "/donation",
				element: <Donation></Donation>,
			},
			{
				path: "/statistics",
				element: <Statistics></Statistics>,
			},
			{
				path: "/donate/:id",
				element: <DonationDetails></DonationDetails>,
			},
		],
	},
]);

export default myRouter;
