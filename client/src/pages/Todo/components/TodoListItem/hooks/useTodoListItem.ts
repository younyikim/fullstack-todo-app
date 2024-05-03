// Hooks
import { useDeleteTodo } from '@/apis/endpoints';

// Typings
import { Todo } from '@/apis/endpoints/todos/todos';

export const useTodoListItem = () => {
	const deleteTodo = useDeleteTodo();

	const handleDeleteTodoOnClick = (item: Todo) => {
		if (confirm(`${item.text} 항목을 삭제하시겠습니까?`)) {
			deleteTodo.mutate({ _id: item._id });
		}
	};

	return { handleDeleteTodoOnClick };
};
