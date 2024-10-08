import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

//React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Components
import App from './App.tsx';
import Login from './components/Login.tsx';
import Error from './components/Error.tsx';

const router = createBrowserRouter([
	{ path: '/', element: <App />, errorElement: <Error /> },
	{ path: '/login', element: <Login />, errorElement: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
