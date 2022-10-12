import ArrowUp from "@images/icon-arrow-up.svg";

export const HeaderNavList = ({ listName, children }) => {
	return (
		<div>
			<p>
				{listName}
				<img
					className="ml-3 inline"
					src={ArrowUp}
					alt="Arrow Up icon"
				/>
			</p>

			<div className="my-4 ml-5 flex flex-col gap-4">{children}</div>
		</div>
	);
};
