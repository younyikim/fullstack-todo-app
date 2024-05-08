import { useState } from 'react';

// Components
import TodoInput from '@/pages/Todo/components/TodoInput';
import TodoListCard from '@/pages/Todo/components/TodoListCard';

const Todo = () => {
	const [selectedItem, setSelectedItem] = useState({
		_id: '',
		text: '',
	});

	return (
		<div className="container mx-auto box-border flex h-full flex-col items-center justify-start px-4 py-14">
			<TodoInput selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			<div className="box-border flex max-h-full w-full items-center justify-center gap-10 p-16">
				<TodoListCard title="Tasks to do" setSelectedItem={setSelectedItem} />
				<TodoListCard title="Done" isDone />
			</div>
		</div>
	);
};

export default Todo;
