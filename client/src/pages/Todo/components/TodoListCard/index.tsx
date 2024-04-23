// Typings
import { TodoListCardProps } from '@/pages/Todo/components/TodoListCard/todoListCard';

const TodoListCard = (props: TodoListCardProps) => {
	const { title } = props;

	return (
		<div className="px-15pxr container flex h-full w-full rounded-lg bg-gray p-8">
			<div>
				<span className="text-2xl">{title}</span>
			</div>
		</div>
	);
};

export default TodoListCard;
