import Container from "../Container";

const Projects = () => {
	return (
		<div id="projects-section" className="bg-blue-400">
			<Container classNames="py-24">
				<div className="text-3xl text-white font-bold">My Projects</div>
				<div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
					<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
					<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
					<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
					<div className="mt-4 p-4 rounded-xl h-40 bg-gray-200">test</div>
				</div>
			</Container>
		</div>
	);
};

export default Projects;
