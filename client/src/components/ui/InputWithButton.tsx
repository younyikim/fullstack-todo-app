import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type InputWithButtonProps = {
	placeholder?: string;
	buttonText?: string;
	className?: string;
};

export function InputWithButton(props: InputWithButtonProps) {
	const { placeholder = 'Email', buttonText = 'Submit' } = props;

	return (
		<div className="flex w-full items-center gap-2 space-x-2">
			<Input type="text" placeholder={placeholder} />
			<Button type="submit">{buttonText}</Button>
		</div>
	);
}
