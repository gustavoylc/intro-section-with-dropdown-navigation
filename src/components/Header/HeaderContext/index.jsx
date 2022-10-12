import { createContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider(props) {
	const [isMenuClosed, setIsMenuClosed] = useState(true);
	return (
		<HeaderContext.Provider
			value={{
				isMenuClosed,
				setIsMenuClosed,
			}}
		>
			{props.children}
		</HeaderContext.Provider>
	);
}

export { HeaderContext, HeaderProvider };
