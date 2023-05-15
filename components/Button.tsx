interface ButtonProps {
	children: JSX.Element | JSX.Element[] | string;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<div className="md:hidden cursor-pointer rounded-full mt-4 bg-blue-400 py-2 px-4 font-semibold w-fit text-center text-gray-900">
			{children}
		</div>
	);
};

export default Button;
