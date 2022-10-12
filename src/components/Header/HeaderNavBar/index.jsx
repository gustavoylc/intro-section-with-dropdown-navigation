import { useContext } from "react";

import { Button } from "@/components/Button";
import { HeaderContext } from "@/components/Header/HeaderContext";
import { HeaderNavLink } from "@/components/Header/HeaderNavLink";
import { HeaderNavList } from "@/components/Header/HeaderNavList";

import Calendar from "@images/icon-calendar.svg";
import CloseMenu from "@images/icon-close-menu.svg";
import Planning from "@images/icon-planning.svg";
import Reminders from "@images/icon-reminders.svg";
import Todo from "@images/icon-todo.svg";

export const HeaderNavBar = () => {
	const { isMenuClosed, setIsMenuClosed } = useContext(HeaderContext);
	const closeMenu = () => {
		setIsMenuClosed(!isMenuClosed);
	};
	return (
		<nav
			className={`fixed top-0 right-0 z-20 flex h-screen w-3/5  flex-col overflow-auto bg-almost-white px-6 pt-16 text-lg ${
                isMenuClosed ? "duration-300 translate-x-full" : "duration-500 "
			}`}
		>
			<button onClick={closeMenu}>
				<img
					className="absolute top-4 right-4"
					src={CloseMenu}
					alt="Close icon"
				/>
			</button>

			<HeaderNavList listName="Features">
				<HeaderNavLink
					linkName="Todo List"
					linkIcon={Todo}
				/>
				<HeaderNavLink
					linkName="Calendar"
					linkIcon={Calendar}
				/>
				<HeaderNavLink
					linkName="Reminders"
					linkIcon={Reminders}
				/>
				<HeaderNavLink
					linkName="Planning"
					linkIcon={Planning}
				/>
			</HeaderNavList>
			<HeaderNavList listName="Company">
				<HeaderNavLink linkName="History" />
				<HeaderNavLink linkName="Our Team" />
				<HeaderNavLink linkName="Blog" />
			</HeaderNavList>
			<HeaderNavLink linkName="Careers" />
			<HeaderNavLink linkName="About" />

			<div className="my-7 flex flex-col gap-3 self-center text-base">
				<Button type="primary-borderless">Login</Button>
				<Button type="primary">Register</Button>
			</div>
		</nav>
	);
};
