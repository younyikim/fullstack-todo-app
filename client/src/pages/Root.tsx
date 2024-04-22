import { Outlet } from 'react-router-dom';
import '@/App.css';

function Root() {
	return (
		<>
			<h1>Vite + React</h1>
			<Outlet />
		</>
	);
}

export default Root;
