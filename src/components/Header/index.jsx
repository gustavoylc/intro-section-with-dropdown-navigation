import { useContext } from "react";



import { HeaderContext } from "@/components/Header/HeaderContext";
import { HeaderNavBar } from "@/components/Header/HeaderNavBar";



import Menu from "@images/icon-menu.svg";
import Logo from "@images/logo.svg";


export const Header = () => {
	const { isMenuClosed, setIsMenuClosed } = useContext(HeaderContext);
	const openMenu = () => {
		setIsMenuClosed(!isMenuClosed);
	};
	//!isMenuClosed && "hidden ease-in-out duration-1500 opacity-0 "
	return (
		<header className="container flex justify-between p-5">
			<a href="#">
				<img
					src={Logo}
					alt="logo"
				/>
			</a>
			<div
				className={`   ${
					isMenuClosed ? "ease-in-out duration-1500 opacity-0" : "fixed top-0 left-0 z-10 h-screen w-screen bg-almost-black bg-opacity-90 ease-in-out duration-100  opacity-100"
				}`}
			>
				<HeaderNavBar />
			</div>
			<button onClick={openMenu}>
				<img
					src={Menu}
					alt="Burger Icon"
				/>
			</button>
		</header>
	);
};