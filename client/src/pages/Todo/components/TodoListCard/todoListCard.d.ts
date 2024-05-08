import { Todo } from '@/apis/endpoints/todos/todos';

export interface TodoListCardProps {
	title: string;
	isDone?: boolean;
	setSelectedItem?: React.Dispatch<React.SetStateAction<Todo>>;
}

export interface TodoListCardHookProps {
	isDone: boolean;
}
