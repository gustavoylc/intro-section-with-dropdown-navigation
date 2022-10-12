export const Button = ({ type, children }) => {
	const styles = {
		primary: "h-10 w-48 border-2 border-medium-gray rounded-2xl",
		"primary-borderless": "h-10 w-48",
		secondary:
			"h-12 w-32 rounded-2xl bg-almost-black font-medium text-almost-white",
	};
	const variantStyle = styles[type];	
	return (
		<button
			className={variantStyle}
		>
			{children}
		</button>
	);
};
