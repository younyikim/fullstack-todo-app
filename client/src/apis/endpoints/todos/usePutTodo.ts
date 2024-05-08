import { useMutation, useQueryClient } from '@tanstack/react-query';

// Utils
import { apiRequest } from '@/apis/axios';
import { apiEndpoints } from '@/apis/endpoints/apiEndpoints';

// Typings
import { Todo, UpdateTodo } from '@/apis/endpoints/todos/todos';
import { mutationKeys, queryKeys } from '@/apis/endpoints/todos/todos.keys';

const fetchPutTodo = (params: UpdateTodo) => {
	return apiRequest.put<UpdateTodo>(apiEndpoints.todos.todo, params);
};

export const usePutTodo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: fetchPutTodo,
		mutationKey: mutationKeys.addTodoList,
		onMutate: async variables => {
			// Optimistic update 덮어쓰기 방지를 위해 캐시 취소
			await queryClient.cancelQueries({ queryKey: queryKeys.todoList });

			// 기존 캐시 데이터 Snapshot
			const previousTodoList = queryClient.getQueryData(queryKeys.todoList);

			queryClient.setQueryData(queryKeys.todoList, (old: Todo[]) =>
				old.map(item => (item._id === variables._id ? { ...item, text: variables.text } : item)),
			);

			return { previousTodoList };
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.todoList });
		},
	});
};
