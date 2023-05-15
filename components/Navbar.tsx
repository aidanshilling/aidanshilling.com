"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

interface NavObject {
	name: string;
	href: string;
}

interface NavItemProps extends NavObject {
	id: number;
	selected: number;
	onClick: () => void;
}

const navItems: NavObject[] = [
	{ name: "Home", href: "#home-section" },
	{ name: "Projects", href: "#projects-section" },
	{ name: "Blog", href: "/projects" },
	{ name: "About", href: "/projects" },
];

const Navbar = () => {
	const [selected, setSelected] = useState<number>(0);

	return (
		<div className="flex flex-row p-8 justify-center md:justify-between w-screen drop-shadow-sm hover:drop-shadow-md hover:duration-500">
			<Button className="my-auto max-md:hidden">Contact me.</Button>
			<div className="flex flex-row  p-2 rounded-full justify-center bg-gray-100">
				{navItems.map((item, idx) => (
					<NavItem
						key={`navbar-${idx}`}
						id={idx}
						name={item.name}
						href={item.href}
						selected={selected}
						onClick={() => {
							setSelected(idx);
						}}
					/>
				))}
			</div>
		</div>
	);
};

const NavItem = ({ name, href, selected, onClick, id }: NavItemProps) => {
	const selectedStyle = "rounded-full bg-gray-200";

	return (
		<Link href={href}>
			<div
				onClick={onClick}
				className={`${
					selected == id ? selectedStyle : ""
				} px-4 py-2 text-gray-900 text-sm text-center hover:text-blue-600`}
			>
				{name}
			</div>
		</Link>
	);
};

export default Navbar;
