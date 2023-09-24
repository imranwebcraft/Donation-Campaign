import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayout = () => {
	return (
		<div className=" px-3 tracking-wide leading-tight">
			<Navbar></Navbar>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
