import { Todo } from '@/apis/endpoints/todos/todos';

export interface TodoInputProps {
	selectedItem: Todo;
	setSelectedItem: React.Dispatch<React.SetStateAction<Todo>>;
}
