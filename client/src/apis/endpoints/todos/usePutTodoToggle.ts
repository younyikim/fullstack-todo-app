import { useMutation, useQueryClient } from '@tanstack/react-query';

// Utils
import { apiRequest } from '@/apis/axios';
import { apiEndpoints } from '@/apis/endpoints/apiEndpoints';

// Typings
import { Todo, ToggleTodo } from '@/apis/endpoints/todos/todos';
import { queryKeys } from '@/apis/endpoints/todos/todos.keys';

const fetchPutTodoToggle = (params: ToggleTodo) => {
	const apiParams = {
		_id: params._id,
		isChecked: params.isChecked,
	};

	return apiRequest.put<ToggleTodo>(apiEndpoints.todos.todoToggle, apiParams);
};

export const usePutTodoToggle = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: fetchPutTodoToggle,
		onMutate: async variables => {
			// Optimistic update 덮어쓰기 방지를 위해 캐시 취소
			await queryClient.cancelQueries({ queryKey: queryKeys.todoList });
			await queryClient.cancelQueries({ queryKey: queryKeys.doneList });

			// 기존 캐시 데이터 Snapshot
			const previousTodoList = queryClient.getQueryData(queryKeys.todoList);
			const previousDoneList = queryClient.getQueryData(queryKeys.doneList);

			// 할일 목록이 완료된 경우 (할일 목록에서 제외, 완료 목록에 추가)
			if (variables.isChecked) {
				queryClient.setQueryData(queryKeys.todoList, (old: Todo[]) =>
					old.filter(item => item._id !== variables._id),
				);
				queryClient.setQueryData(queryKeys.doneList, (old: Todo[]) => [...old, variables]);
			}
			// 완료 목록 취소하는 경우 (완료 목록에서 제외, 할일 목록에 추가)
			else {
				queryClient.setQueryData(queryKeys.doneList, (old: Todo[]) =>
					old.filter(item => item._id !== variables._id),
				);
				queryClient.setQueryData(queryKeys.todoList, (old: Todo[]) => [...old, variables]);
			}

			return { previousTodoList, previousDoneList };
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.todoList });
			queryClient.invalidateQueries({ queryKey: queryKeys.doneList });
		},
	});
};
