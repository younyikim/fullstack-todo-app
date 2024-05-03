// Hooks
import { useTodoListItem } from '@/pages/Todo/components/TodoListItem/hooks/useTodoListItem';

// Utils
import { Images } from '@/utils/images';

// Typings
import { TodoListItemProps } from '@/pages/Todo/components/TodoListItem/todoListItem';

const TodoListItem = (props: TodoListItemProps) => {
	const { item } = props;

	const { handleDeleteTodoOnClick, handleTodoCheckOnClick } = useTodoListItem();

	return (
		<div
			key={item._id}
			className="box-border flex max-w-full items-center justify-between overflow-hidden rounded-lg bg-background px-4 py-6"
		>
			<div className="box-border flex w-full flex-grow items-center gap-4">
				<div className="flex items-center">
					<div className="w-full cursor-pointer">
						<img src={Images.DragVertical} alt="drag vertical icon" />
					</div>
					<div className="w-full cursor-pointer" onClick={() => handleTodoCheckOnClick(item)}>
						<img src={Images.Checkbox} alt="checkbox icon" />
					</div>
				</div>
				<div className="flex w-0 flex-grow justify-start text-lg">
					<p className={'truncate text-primary'}>{item.text}</p>
				</div>
			</div>
			<div className="flex w-fit items-center justify-center gap-2">
				<div className="w-full cursor-pointer">
					<img src={Images.Edit} width={22} alt="Edit icon" />
				</div>
				<div className="w-full cursor-pointer" onClick={() => handleDeleteTodoOnClick(item)}>
					<img src={Images.Trash} width={22} alt="Trash icon" />
				</div>
			</div>
		</div>
	);
};

export default TodoListItem;
