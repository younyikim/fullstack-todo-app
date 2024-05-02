import { useEffect, useState } from 'react';

// Hooks
import { useFetchTodoList } from '@/apis/endpoints';

// Typings
import { TodoListCardHookProps } from '@/pages/Todo/components/TodoListCard/todoListCard';
import { Todo } from '@/apis/endpoints/todos/todos';

export const useTodoListCard = (props: TodoListCardHookProps) => {
	const { isDone } = props;
	const [list, setList] = useState<Todo[]>([]);

	const todoList = useFetchTodoList({ isDone });

	useEffect(() => {
		if (todoList?.data && !isDone) {
			setList(todoList.data);
		}
	}, [todoList?.data]);

	return { list, setList };
};
