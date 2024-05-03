// Utils
import { Images } from '@/utils/images';

// Typings
import { TodoListItemProps } from '@/pages/Todo/components/TodoListItem/todoListItem';

const TodoListItem = (props: TodoListItemProps) => {
	const { item } = props;

	return (
		<div
			key={item._id}
			className="box-border flex max-w-full items-center justify-between overflow-hidden rounded-lg bg-background px-4 py-6"
		>
			<div className="box-border flex w-full flex-grow items-center gap-4">
				<div className="flex items-center">
					<>
						<img src={Images.DragVertical} alt="drag vertical icon" />
						<img src={Images.Checkbox} alt="checkbox icon" />
					</>
				</div>
				<div className="flex w-0 flex-grow justify-start text-lg">
					<p className={'truncate text-primary'}>{item.text}</p>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex items-center gap-2">
					<>
						<img src={Images.Edit} alt="Edit icon" />
						<img src={Images.Trash} alt="Trash icon" />
					</>
				</div>
			</div>
		</div>
	);
};

export default TodoListItem;
