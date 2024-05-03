import { useEffect, useState } from 'react';

// Hooks
import { useFetchDoneList, useFetchTodoList } from '@/apis/endpoints';

// Typings
import { TodoListCardHookProps } from '@/pages/Todo/components/TodoListCard/todoListCard';
import { Todo } from '@/apis/endpoints/todos/todos';

/**
 * TodoListCard 컴포넌트에서 사용되는 custom hook.
 * @param {TodoListCardHookProps} props - TodoListCardHookProps 객체
 * @returns {{list: Todo[], setList: Function}} - TodoListCard에 사용될 데이터와 데이터 설정 함수
 */
export const useTodoListCard = (props: TodoListCardHookProps) => {
	const { isDone } = props;
	const [list, setList] = useState<Todo[]>([]);

	// Data Fetching
	const todoList = useFetchTodoList({ isDone });
	const doneList = useFetchDoneList({ isDone });

	/*
	 * isDone 플래그에 따라, 할일 목록 혹은 완료 목록 데이터를 list에 저장
	 */
	useEffect(() => {
		if (todoList?.data && !isDone) {
			setList(todoList.data);
		}

		if (doneList?.data && isDone) {
			setList(doneList.data);
		}
	}, [todoList?.data, doneList?.data]);

	return { list, setList };
};
