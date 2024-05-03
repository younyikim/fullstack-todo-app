export interface Todo {
	_id: string;
	text: string;
}

export type CreateTodo = {
	text: string;
};

export type DeleteTodo = {
	_id: string;
};
