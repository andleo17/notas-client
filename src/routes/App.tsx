import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useMeQuery } from '../generated/graphql';
import { useAuth } from '../hooks/AuthContext';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

function App() {
	const { setUser } = useAuth();
	const { data, loading, error } = useMeQuery();

	useEffect(() => {
		if (!!data) setUser(data.me);
	}, [data]);

	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error</p>;

	return (
		<Router>
			<Switch>
				<Route exact path='/login'>
					<Auth />
				</Route>
				<ProtectedRoute exact path='/'>
					<Home />
				</ProtectedRoute>
				<NotFound />
			</Switch>
		</Router>
	);
}

export default App;
