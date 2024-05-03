// Hooks
import { useTodoListCard } from '@/pages/Todo/components/TodoListCard/hooks/useTodoListCard';

// Components
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import TodoListItem from '@/pages/Todo/components/TodoListItem';
import DoneListItem from '@/pages/Todo/components/DoneListItem';

// Typings
import { TodoListCardProps } from '@/pages/Todo/components/TodoListCard/todoListCard';

const TodoListCard = (props: TodoListCardProps) => {
	const { title, isDone = false } = props;

	const { list } = useTodoListCard({ isDone });

	return (
		<div className="flex h-full w-full flex-col items-center overflow-auto rounded-lg bg-gray px-11 scrollbar-hide">
			<div className="sticky top-0 z-10 flex w-full bg-gray px-6 py-6">
				<span className="text-2xl">{title}</span>
			</div>
			<ScrollArea>
				{list.map(item => (
					<>
						{isDone ? <DoneListItem item={item} /> : <TodoListItem item={item} />}
						<Separator className="my-2" />
					</>
				))}
			</ScrollArea>
		</div>
	);
};

export default TodoListCard;
