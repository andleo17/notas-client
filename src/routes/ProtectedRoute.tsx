import { Redirect, Route, RouteProps } from 'react-router';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../hooks/AuthContext';

function ProtectedRoute({
	children,
	...props
}: React.PropsWithChildren<RouteProps>) {
	const { user } = useAuth();
	return (
		<Route
			{...props}
			render={({ location }) =>
				!!user ? (
					<div id='app'>
						<Sidebar />
						{children}
					</div>
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default ProtectedRoute;
