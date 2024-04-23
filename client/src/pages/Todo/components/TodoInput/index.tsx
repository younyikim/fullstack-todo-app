// Hooks
import { useTodoInput } from '@/pages/Todo/components/TodoInput/hooks/useTodoInput';

// Components
import { InputWithButton } from '@/components/ui/InputWithButton';

const TodoInput = () => {
	const { value, buttonText, handleInputOnChange, handleSubmitOnClick } = useTodoInput();

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
