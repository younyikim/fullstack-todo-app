import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type InputWithButtonProps = {
	placeholder?: string;
	button?: string;
	value: string;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function InputWithButton(props: InputWithButtonProps) {
	const {
		placeholder = 'Enter text',
		button = 'Submit',
		value,
		onChange,
		onClick = () => {},
		...otherProps
	} = props;

	return (
		<div className="flex w-full items-center justify-center gap-2 space-x-2">
			<Input type="text" placeholder={placeholder} value={value} onChange={onChange} />
			<Button type="submit" variant="primary" onClick={onClick} {...otherProps}>
				{button}
			</Button>
		</div>
	);
}
