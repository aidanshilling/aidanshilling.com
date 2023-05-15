interface ButtonProps {
	children: JSX.Element | JSX.Element[] | string;
	className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
	return (
		<div
			className={`drop-shadow-md hover:drop-shadow-lg hover:duration-500 cursor-pointer rounded-full bg-blue-400 py-2 px-4 font-semibold w-fit text-center text-gray-100 ${className}`}
		>
			{children}
		</div>
	);
};

export default Button;
