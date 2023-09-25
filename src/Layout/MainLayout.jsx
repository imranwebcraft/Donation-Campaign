import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
	const location = useLocation();
	console.log(location.state);

	useEffect(() => {
		if (location.pathname === "/") {
			document.title = `Donation - Home`;
		} else {
			if (location.state) {
				document.title = `${location.state}`;
			} else {
				document.title = `Donation ${location.pathname.replace(
					"/",
					"-",
				)}`;
			}
		}
	}, [location.pathname, location.state]);

	return (
		<div className=" px-3 tracking-wide leading-tight">
			<Navbar></Navbar>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
