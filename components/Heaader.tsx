interface HeaderProps {
	title: string;
	subtitle: string;
	intro: string;
}

const Header = ({ title, subtitle, intro }: HeaderProps) => {
	return (
		<div className="text-gray-900 text-lg py-24">
			<div className="mb-4">{intro}</div>
			<div className="text-5xl font-bold">{title}</div>
			<div className="text-5xl font-bold text-gray-500">{subtitle}</div>
		</div>
	);
};

export default Header;
