interface HeaderProps {
	title: string;
	subtitle: string;
	intro: string;
}

const Header = ({ title, subtitle, intro }: HeaderProps) => {
	return (
		<div className="text-gray-900 text-2xl py-24">
			<div className="mb-4 text-blue-400">{intro}</div>
			<div className="text-8xl font-bold">{title}</div>
			<div className="text-8xl font-bold text-gray-500">{subtitle}</div>
		</div>
	);
};

export default Header;
