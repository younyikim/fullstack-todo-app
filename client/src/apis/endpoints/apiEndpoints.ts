/**
 * @description API endpoint를 정의한 객체
 */
export const apiEndpoints = {
	todos: {
		todoList: '/todos',
		todo: '/todos/:id',
	},
	done: {
		doneList: '/done',
		done: '/done/:id',
	},
};
