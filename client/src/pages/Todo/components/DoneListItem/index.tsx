// Hooks
import { useDoneListItem } from '@/pages/Todo/components/DoneListItem/hooks/useDoneListItem';

// Utils
import { Images } from '@/utils/images';

// Typing
import { DoneListItemProps } from '@/pages/Todo/components/DoneListItem/doneListItem';

const DoneListItem = (props: DoneListItemProps) => {
	const { item } = props;

	const { handleDeleteDoneOnClick, handleDoneCheckOnClick } = useDoneListItem();

	return (
		<div
			key={item._id}
			className="box-border flex max-w-full items-center justify-between overflow-hidden rounded-lg bg-background px-4 py-6"
		>
			<div className="box-border flex w-full flex-grow items-center gap-4">
				<div className="flex items-center" onClick={() => handleDoneCheckOnClick(item)}>
					<img src={Images.CheckboxDone} alt="checkbox filled icon" />
				</div>
				<div className="flex w-0 flex-grow justify-start text-lg">
					<p className={'truncate text-green line-through'}>{item.text}</p>
				</div>
			</div>
			<div className="flex items-center">
				<div
					className="flex cursor-pointer items-center"
					onClick={() => handleDeleteDoneOnClick(item)}
				>
					<img src={Images.TrashDone} alt="Trash Done icon" />
				</div>
			</div>
		</div>
	);
};

export default DoneListItem;
