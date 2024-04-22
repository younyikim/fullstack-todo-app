import { createBrowserRouter } from 'react-router-dom';

// Pages
import Root from '@pages/Root';
import DevSample from '@/pages/DevSample';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/test',
				element: <div>Test</div>,
			},
		],
	},
	{
		path: '/sample',
		element: <DevSample />,
	},
]);

export default router;
