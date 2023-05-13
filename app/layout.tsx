import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Aidan Shilling",
	description: "If you're reading this, you are very cool😎. Have a nice!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<header className="fixed z-50">
					<Navbar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
