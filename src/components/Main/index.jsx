import HeroMobile from "@images/image-hero-mobile.png";
import HeroDesktop from "@images/image-hero-desktop.png";
import { Sponsors } from "@/components/Sponsors";
import { Button } from "@/components/Button";

export const Main = () => {
	return (
		<main className="md:grid md:justify-items-center">
			<picture>
				<source
					srcSet={HeroDesktop}
					media="(min-width: 1440px)"
				/>
				<img
					src={HeroMobile}
					alt="Man with Laptop"
				/>
			</picture>
			<div className="grid place-items-center gap-7 px-5 py-12">
				<h1 className="text-4xl font-bold text-almost-black">Make remote work</h1>
				<p className="text-center">
					Get your team in sync, no matter your location. Streamline processes,
					create team rituals, and watch productivity soar.
				</p>
				<Button type="secondary">Learn more</Button>
			</div>
			<Sponsors />
		</main>
	);
};
