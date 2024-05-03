// Typings
import { useDeleteTodo } from '@/apis/endpoints';

export const useTodoListItem = () => {
	const deleteTodo = useDeleteTodo();

	const handleDeleteTodoOnClick = (_id: string) => {
		deleteTodo.mutate({ _id });
	};

	return { handleDeleteTodoOnClick };
};
