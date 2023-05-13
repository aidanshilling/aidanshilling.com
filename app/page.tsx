import Container from "@/components/Container";
import Header from "@/components/Heaader";

export default function Home() {
	return (
		<div className="text-gray-900 h-screen">
			<Container id="home-section" classNames="flex items-center h-full">
				<Header title="Aidan Shilling." subtitle="I develop software 🧑‍💻" intro="👋Hi, my name is" />
			</Container>
			<div id="projects-section" className="bg-blue-400 h-full">
				<Container classNames="py-24">
					<div className="text-3xl text-white font-bold">My Projects</div>
					<div className="my-8 grid grid-cols-3 gap-8">
						<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
						<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
						<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
						<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
						<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
