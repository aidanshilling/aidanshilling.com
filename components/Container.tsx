interface ContainerProps {
	children: JSX.Element | string;
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">{children}</div>
		</div>
	);
};

export default Container;
