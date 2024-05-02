// Hooks
import { useTodoListCard } from '@/pages/Todo/components/TodoListCard/hooks/useTodoListCard';

// Components
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

// Typings
import { TodoListCardProps } from '@/pages/Todo/components/TodoListCard/todoListCard';
import { Images } from '@/utils/images';

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
						<div
							key={item._id}
							className="box-border flex max-w-full items-center justify-between overflow-hidden rounded-lg bg-background px-4 py-6"
						>
							<div className="box-border flex w-full flex-grow items-center gap-4">
								<div className="flex items-center">
									{isDone ? (
										<>
											<img src={Images.CheckboxFilled} alt="checkbox filled icon" />
										</>
									) : (
										<>
											<img src={Images.DragVertical} alt="drag vertical icon" />
											<img src={Images.Checkbox} alt="checkbox icon" />
										</>
									)}
								</div>
								<div className="flex w-0 flex-grow justify-start text-lg">
									<p className={`truncate ${isDone ? 'text-green line-through' : 'text-primary'}`}>
										{item.text}
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<div className="flex items-center gap-2">
									{isDone ? (
										<>
											<img src={Images.TrashDone} alt="Trash Done icon" />
										</>
									) : (
										<>
											<img src={Images.Edit} alt="Edit icon" />
											<img src={Images.Trash} alt="Trash icon" />
										</>
									)}
								</div>
							</div>
						</div>

						<Separator className="my-2" />
					</>
				))}
			</ScrollArea>
		</div>
	);
};

export default TodoListCard;
