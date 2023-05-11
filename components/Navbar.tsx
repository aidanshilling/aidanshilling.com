import Link from "next/link";

interface NavItemType {
	name: string;
	href: string;
	selected: boolean;
}

const navItems: NavItemType[] = [
	{ name: "Home", href: "/", selected: true },
	{ name: "Projects", href: "/projects", selected: false },
	{ name: "Blog", href: "/projects", selected: false },
	{ name: "About", href: "/projects", selected: false },
];

const Navbar = () => {
	return (
		<div className="flex flex-row justify-center">
			<div className="flex flex-row m-8 p-2 rounded-full justify-center bg-gray-100">
				{navItems.map((item) => (
					<NavItem name={item.name} href={item.href} selected={item.selected} />
				))}
			</div>
		</div>
	);
};

const NavItem = ({ name, href, selected }: NavItemType) => {
	const selectedStyle = "rounded-full bg-gray-200";

	return (
		<div className={`${selected ? selectedStyle : ""} px-4 py-2 text-gray-900 text-sm text-center hover:text-blue-600`}>
			<Link href={href}>{name}</Link>
		</div>
	);
};

export default Navbar;
