import { Fragment } from "react";

export const Home = () => {
	return (
		<Fragment>
			<footer>
				<div className="text-center text-xs">
					Challenge by{" "}
					<a
						className="text-footer-primary"
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						className="text-footer-primary"
						href="https://www.frontendmentor.io/profile/gustavoylc"
					>
						Gustavo Leyte-Vidal
					</a>
					.
				</div>
			</footer>
		</Fragment>
	);
};
