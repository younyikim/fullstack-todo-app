// Components
import TodoInput from '@/pages/Todo/components/TodoInput';
import TodoListCard from '@/pages/Todo/components/TodoListCard';

const Todo = () => {
	return (
		<div className="container mx-auto box-border flex h-full flex-col items-center justify-start px-4 py-14">
			<TodoInput />
			<div className="box-border flex max-h-full w-full items-center justify-center gap-10 p-16">
				<TodoListCard title="Tasks to do" />
				<TodoListCard title="Done" isDone />
			</div>
		</div>
	);
};

export default Todo;
