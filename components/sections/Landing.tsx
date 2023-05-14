import Container from "../Container";
import Header from "../Heaader";

const Landing = () => {
	return (
		<Container id="home-section" classNames="flex items-center h-full">
			<Header title="Aidan Shilling." subtitle="I develop software 🧑‍💻" intro="👋Hi, my name is" />
		</Container>
	);
};

export default Landing;
