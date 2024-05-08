import { Todo } from '@/apis/endpoints/todos/todos';

export interface TodoListItemProps {
	item: Todo;
	setSelectedItem: React.Dispatch<React.SetStateAction<Todo>>;
}

export interface TodoListItemHookProps {
	setSelectedItem: React.Dispatch<React.SetStateAction<Todo>>;
}
