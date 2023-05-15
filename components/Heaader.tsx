import Button from "./Button";

interface HeaderProps {
	title: string;
	subtitle: string;
	intro: string;
}

const Header = ({ title, subtitle, intro }: HeaderProps) => {
	return (
		<div className="text-gray-900 max-md:mb-24 text-lg md:text-2xl py-24">
			<div className="mb-4 font-semibold text-blue-400">{intro}</div>
			<div className="text-4xl md:text-5xl lg:text-8xl font-bold">{title}</div>
			<div className="text-3xl md:text-5xl lg:text-8xl font-bold text-gray-500">{subtitle}</div>
			<Button>Contact me.</Button>
		</div>
	);
};

export default Header;
