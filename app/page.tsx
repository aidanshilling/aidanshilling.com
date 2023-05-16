import Navbar from "@/components/Navbar";
import Landing from "@/components/sections/Landing";
import Container from "@/components/Container";

export default function Home() {
	return (
		<>
			<header className="fixed max-md:bottom-0 md:top-0">
				<Navbar />
			</header>
			<main>
				<div className="text-gray-900 h-screen">
					<Landing />
					{/* <Projects /> */}
					<div id="about" className="group bg-blue-400">
						<Container classNames="py-24">
							<div className="text-3xl text-gray-100 font-bold cursor-default">About</div>
							<div className="transition-all duration-150 w-8 group-hover:w-12 border-b-4 border-blue-300"></div>
							<div className="mt-8 h-96 text-gray-100">I am a developer of cool stuff</div>
						</Container>
					</div>
				</div>
			</main>
		</>
	);
}
