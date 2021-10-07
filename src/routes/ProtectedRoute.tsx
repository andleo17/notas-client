import { Redirect, Route, RouteProps } from 'react-router';
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
					children
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
