interface ImagesType extends Record<string, string> {
	Checkbox: string;
	CheckboxFilled: string;
	CheckboxDone: string;
	DragVertical: string;
	Edit: string;
	Trash: string;
	TrashDone: string;
}

export const Images: ImagesType = {
	Checkbox: `src/assets/images/ic-checkbox.svg`,
	CheckboxFilled: `src/assets/images/ic-checkbox-filled.svg`,
	CheckboxDone: `src/assets/images/ic-checkbox-done.svg`,
	DragVertical: `src/assets/images/ic-drag-vertical.svg`,
	Edit: `src/assets/images/ic-edit.svg`,
	Trash: `src/assets/images/ic-trash.svg`,
	TrashDone: `src/assets/images/ic-trash-done.svg`,
};
