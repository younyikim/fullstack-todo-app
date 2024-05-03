import { useEffect, useState } from 'react';

// Utils
import { usePostTodo } from '@/apis/endpoints/todos/usePostTodo';

export const useTodoInput = () => {
	const [value, setValue] = useState('');
	const [buttonText, setButtonText] = useState('확인');
	const [isCreate] = useState(true);

	const { mutate } = usePostTodo();

	useEffect(() => {
		if (isCreate) setButtonText('확인');
		else setButtonText('수정');
	}, [isCreate]);

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
			mutate({ text: value });
			setValue('');
		}
		// Task 수정
		else {
			console.log('Update task', value);
		}
	};

	return {
		value,
		buttonText,
		handleInputOnChange,
		handleSubmitOnClick,
	};
};
