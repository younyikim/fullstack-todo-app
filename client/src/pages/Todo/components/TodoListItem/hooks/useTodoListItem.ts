// Hooks
import { useDeleteTodo, usePutTodoToggle } from '@/apis/endpoints';

// Typings
import { Todo } from '@/apis/endpoints/todos/todos';
import { TodoListItemHookProps } from '@/pages/Todo/components/TodoListItem/todoListItem';

export const useTodoListItem = (props: TodoListItemHookProps) => {
	const { setSelectedItem } = props;

	const deleteTodo = useDeleteTodo();
	const toggleTodo = usePutTodoToggle();

	const handleDeleteTodoOnClick = (item: Todo) => {
		if (confirm(`${item.text} 항목을 삭제하시겠습니까?`)) {
			deleteTodo.mutate({ _id: item._id });
		}
	};

	const handleTodoCheckOnClick = (item: Todo) => {
		toggleTodo.mutate({ ...item, isChecked: true });
	};

	const handleTodoUpdateOnClick = (item: Todo) => {
		setSelectedItem(item);
	};

	return { handleDeleteTodoOnClick, handleTodoCheckOnClick, handleTodoUpdateOnClick };
};
