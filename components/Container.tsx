interface ContainerProps {
	children: JSX.Element | JSX.Element[] | string;
	classNames?: string;
	id?: string;
}

const Container = ({ children, classNames, id }: ContainerProps) => {
	return (
		<div id={id} className={`mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ${classNames}`}>
			<div className={`mx-auto max-w-5xl`}>{children}</div>
		</div>
	);
};

export default Container;
