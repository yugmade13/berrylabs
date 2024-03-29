import clsx from 'clsx';

type JSXParagraph = JSX.IntrinsicElements['p'];

interface ParagraphProps extends JSXParagraph {
	children: React.ReactNode;
}

const Paragraph = ({ children, className, ...rest }: ParagraphProps) => {
	return (
		<p
			className={clsx('font-normal text-brown', className)}
			{...rest}>
			{children}
		</p>
	);
};

export default Paragraph;
