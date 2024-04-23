import { useEffect, useState } from 'react';

export const useTodoInput = () => {
	const [value, setValue] = useState('');
	const [buttonText, setButtonText] = useState('확인');
	const [isCreate] = useState(false);

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
			console.log('Create task', value);
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
