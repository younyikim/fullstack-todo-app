import { useMutation, useQueryClient } from '@tanstack/react-query';

// Utils
import { apiRequest } from '@/apis/axios';
import { apiEndpoints } from '@/apis/endpoints/apiEndpoints';

// Typings
import { DeleteTodo, Todo } from '@/apis/endpoints/todos/todos';
import { queryKeys } from '@/apis/endpoints/todos/todos.keys';

const fetchDeleteDone = (params: DeleteTodo) => {
	return apiRequest.remove(apiEndpoints.done.done, params);
};

export const useDeleteDone = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: fetchDeleteDone,
		onMutate: async variables => {
			// Optimistic update 덮어쓰기 방지를 위해 캐시 취소
			await queryClient.cancelQueries({ queryKey: queryKeys.doneList });

			// 기존 캐시 데이터 Snapshot
			const previousTodoList = queryClient.getQueryData(queryKeys.doneList);

			queryClient.setQueryData(queryKeys.doneList, (old: Todo[]) =>
				old.filter(item => item._id !== variables._id),
			);

			return { previousTodoList };
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.doneList });
		},
	});
};
