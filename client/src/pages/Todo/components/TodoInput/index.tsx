// Hooks
import { useTodoInput } from '@/pages/Todo/components/TodoInput/hooks/useTodoInput';

// Components
import { InputWithButton } from '@/components/ui/InputWithButton';

// Typings
import { TodoInputProps } from '@/pages/Todo/components/TodoInput/todoInput';

const TodoInput = (props: TodoInputProps) => {
	const { selectedItem, setSelectedItem } = props;

	const { value, buttonText, handleInputOnChange, handleSubmitOnClick } = useTodoInput({
		selectedItem,
		setSelectedItem,
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
