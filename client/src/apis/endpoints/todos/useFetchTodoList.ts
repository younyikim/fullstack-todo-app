import { useQuery } from '@tanstack/react-query';

// Utils
import { apiRequest } from '@/apis/axios';
import { queryKeys } from '@/apis/endpoints/todos/todos.keys';
import { apiEndpoints } from '@/apis/endpoints/apiEndpoints';

// Typings
import { Todo } from '@/apis/endpoints/todos/todos';

const fetchTodos = () => {
	return apiRequest.get<Todo[]>(apiEndpoints.todos.todoList);
};

export const useFetchTodoList = () => {
	return useQuery({ queryKey: queryKeys.todoList, queryFn: fetchTodos });
};
