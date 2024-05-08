import { useEffect, useState } from 'react';

// Utils
import { usePostTodo } from '@/apis/endpoints/todos/usePostTodo';
import { TodoInputProps } from '@/pages/Todo/components/TodoInput/todoInput';
import { usePutTodo } from '@/apis/endpoints';

export const useTodoInput = (props: TodoInputProps) => {
	const { selectedItem } = props;

	const [value, setValue] = useState('');
	const [buttonText, setButtonText] = useState('확인');
	const [isCreate, setIsCreate] = useState(true);

	const postTodo = usePostTodo();
	const updateTodo = usePutTodo();

	useEffect(() => {
		if (isCreate) setButtonText('확인');
		else setButtonText('수정');
	}, [isCreate]);

	useEffect(() => {
		if (selectedItem && selectedItem?.text) {
			setValue(selectedItem.text);
			setIsCreate(false);
		}
	}, [selectedItem]);

	/**
	 * Todo task input onChange 핸들러
	 * @param event
	 */
	const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	/**
	 * Todo task 저장 onClick 핸들러
	 */
	const handleSubmitOnClick = () => {
		// Task 생성
		if (isCreate) {
			postTodo.mutate({ text: value });
			setValue('');
		}
		// Task 수정
		else {
			updateTodo.mutate({ ...selectedItem, text: value });
			setValue('');
			setIsCreate(true);
		}
	};

	return {
		value,
		buttonText,
		handleInputOnChange,
		handleSubmitOnClick,
	};
};
