import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import Landing from "@/components/sections/Landing";

export default function Home() {
	return (
		<>
			<header className="fixed bottom-0 md:top-0 z-50">
				<Navbar />
			</header>
			<main>
				<div className="text-gray-900 h-screen">
					<Landing />
					<Projects />
				</div>
			</main>
		</>
	);
}
