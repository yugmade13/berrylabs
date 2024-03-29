import { forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonOptions {}

type Ref = HTMLButtonElement;

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> &
	ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
	const { type = 'button', children, className, ...rest } = props;
	return (
		<button
			ref={ref}
			className={clsx('rounded-lg border border-purple-1 px-8 py-2', className)}
			{...rest}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
export default Button;
