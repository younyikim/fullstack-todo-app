import { Outlet } from 'react-router-dom';
import '@/App.css';

// Pages
import Todo from '@/pages/Todo';

function Root() {
	return (
		<>
			<Todo />
			<Outlet />
		</>
	);
}

export default Root;
