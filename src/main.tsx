import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './routes/App';
import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AuthProvider } from './hooks/AuthContext';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token');
	return {
		headers: { ...headers, authorization: !!token ? `Bearer ${token}` : '' },
	};
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
