import ArrowUp from "@images/icon-arrow-up.svg";

export const HeaderNavLink = ({ linkName, linkIcon }) => {
	return linkIcon ? (
		<a
			className="flex items-center"
			href="#"
		>
			<img
				className="mr-3 inline"
				src={linkIcon}
				alt={`${linkName} icon`}
			/>
			{linkName}
		</a>
	) : (
		<a
			className="block"
			href="#"
		>
			{linkName}
		</a>
	);
};
