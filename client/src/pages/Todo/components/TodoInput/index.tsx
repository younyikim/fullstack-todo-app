// Hooks
import { useTodoInput } from '@/pages/Todo/components/TodoInput/hooks/useTodoInput';

// Components
import { InputWithButton } from '@/components/ui/InputWithButton';

// Typings
import { TodoInputProps } from '@/pages/Todo/components/TodoInput/todoInput';

const TodoInput = (props: TodoInputProps) => {
	const { selectedItem } = props;

	const { value, buttonText, handleInputOnChange, handleSubmitOnClick } = useTodoInput({
		selectedItem,
	});

	return (
		<InputWithButton
			placeholder="Add a new task"
			button={buttonText}
			value={value}
			onChange={handleInputOnChange}
			onClick={handleSubmitOnClick}
		/>
	);
};

export default TodoInput;
