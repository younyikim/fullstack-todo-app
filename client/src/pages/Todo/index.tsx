// Components
import TodoInput from '@/pages/Todo/components/TodoInput';
import TodoListCard from '@/pages/Todo/components/TodoListCard';

const Todo = () => {
	return (
		<div className="hg-full container mx-auto flex flex-col items-center justify-center px-4 py-2 pt-14">
			<TodoInput />
			<div className="flex w-full items-center justify-center gap-2 p-16">
				<TodoListCard title="Tasks to do" />
				<TodoListCard title="Done" />
			</div>
		</div>
	);
};

export default Todo;
