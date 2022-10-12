import { Home } from "@/pages/Home";

import { HeaderProvider } from "@/components/Header/HeaderContext";

export function App() {
	return (
		<HeaderProvider>
			<Home />
		</HeaderProvider>
	);
}
