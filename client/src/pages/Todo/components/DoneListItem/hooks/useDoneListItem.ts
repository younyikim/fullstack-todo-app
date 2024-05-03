// Hooks
import { useDeleteDone, usePutTodoToggle } from '@/apis/endpoints';

// Typings
import { Todo } from '@/apis/endpoints/todos/todos';

export const useDoneListItem = () => {
	const deleteTodo = useDeleteDone();
	const toggleTodo = usePutTodoToggle();

	const handleDeleteDoneOnClick = (item: Todo) => {
		if (confirm(`${item.text} 항목을 삭제하시겠습니까?`)) {
			deleteTodo.mutate({ _id: item._id });
		}
	};

	const handleDoneCheckOnClick = (item: Todo) => {
		toggleTodo.mutate({ ...item, isChecked: false });
	};

	return { handleDeleteDoneOnClick, handleDoneCheckOnClick };
};
