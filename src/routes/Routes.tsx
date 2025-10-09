// import { Home } from '../views/home/Home'
import { Home } from '../views/home/Home'
import { Login } from '../views/login/Login'
import { Dashboard } from '../views/dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error404 } from '../components/error404/Error404.index'
import { Layout } from '../components/partials/layout/Layout'
// import { PrivateRoute } from './PrivateRoute'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},

			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '*',
				element: <Error404 />,
			},
		],

		// errorElement: <Error404 />,
	},
])

const myRoutes = () => <RouterProvider router={routes} />

export default myRoutes
