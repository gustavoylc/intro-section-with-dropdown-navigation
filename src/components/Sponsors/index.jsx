import Databiz from "@images/client-databiz.svg";
import Audiophile from "@images/client-audiophile.svg";
import Meet from "@images/client-meet.svg";
import Maker from "@images/client-maker.svg";

export const Sponsors = () => {
	const sponsors = [
		{ logo: Databiz, name: "Databiz" },
		{ logo: Audiophile, name: "Audiophile" },
		{ logo: Meet, name: "Meet" },
		{ logo: Maker, name: "Maker" },
	];
	return (
		<figure className="grid grid-cols-4 items-center gap-8 p-4">
			{sponsors.map((sponsor) => (
				<img
					key={sponsor.name}
					src={sponsor.logo}
					alt={sponsor.name}
				/>
			))}
		</figure>
	);
};
