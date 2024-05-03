import { useQuery } from '@tanstack/react-query';

// Utils
import { apiRequest } from '@/apis/axios';
import { queryKeys } from '@/apis/endpoints/todos/todos.keys';
import { apiEndpoints } from '@/apis/endpoints/apiEndpoints';

// Typings
import { Todo } from '@/apis/endpoints/todos/todos';

const fetchDone = () => {
	return apiRequest.get<Todo[]>(apiEndpoints.done.doneList);
};

export const useFetchDoneList = ({ isDone = false }) => {
	return useQuery({ queryKey: queryKeys.doneList, queryFn: fetchDone, enabled: isDone });
};
