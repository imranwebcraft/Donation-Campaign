import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
	return (
		<div className=" ">
			<nav className=" max-w-7xl mx-auto py-2 px-4 text-white  lg:px-8 lg:py-4">
				<div className="flex items-center text-gray-900">
					{/* Logo */}
					<Link className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
						<img src={logo} alt="logo" />
					</Link>

					{/* Route Navlink */}

					<ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
						<li className=" text-lg font-bold">
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "text-red-500 underline decoration-2 underline-offset-2"
										: ""
								}
							>
								Home
							</NavLink>
						</li>
						<li className=" text-lg font-bold">
							<NavLink
								to="/donation"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "text-red-500 underline decoration-2 underline-offset-2"
										: ""
								}
							>
								Donation
							</NavLink>
						</li>
						<li className=" text-lg font-bold">
							<NavLink
								to="/statistics"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "text-red-500 underline decoration-2 underline-offset-2"
										: ""
								}
							>
								Statistics
							</NavLink>
						</li>
					</ul>

					<button
						className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
						data-collapse-target="sticky-navar"
					>
						<span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</span>
					</button>
				</div>
				<div
					className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
					data-collapse="sticky-navar"
				>
					<ul className="mt-2 mb-4 flex flex-col gap-2 pb-2">
						<li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a className="flex items-center" href="#">
								Pages
							</a>
						</li>
						<li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a className="flex items-center" href="#">
								Account
							</a>
						</li>
						<li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a className="flex items-center" href="#">
								Blocks
							</a>
						</li>
						<li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a className="flex items-center" href="#">
								Docs
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
