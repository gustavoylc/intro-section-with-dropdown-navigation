import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export const Home = () => {
	return (
		<main className="min-w-375 text-base font-medium text-medium-gray">
			<Header />
			<Main />
			<Footer />
		</main>
	);
};
