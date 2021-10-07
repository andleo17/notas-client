import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Location } from 'history';
import { useAuth } from '../hooks/AuthContext';
import '../styles/Login.scss';
import { useLoginLazyQuery } from '../generated/graphql';

// const logout = () => {
// 	localStorage.removeItem('token');
// 	setUser(null);
// };

// const signUp = (username: string, password: string) => {
// 	useSignUpMutation({
// 		variables: { username, password },
// 		onCompleted: (data) => {
// 			localStorage.setItem('token', data.signup.token);
// 			setUser(data.signup.user);
// 		},
// 		onError: (error) => {
// 			console.log(error);
// 			localStorage.removeItem('token');
// 			setUser({});
// 		},
// 	});
// };

type LoginFormData = {
	nickname: string;
	password: string;
};

type LocationState = {
	from: Location<{ pathname: string }>;
};

function Login() {
	const history = useHistory();
	const location = useLocation<LocationState>();
	const { setUser } = useAuth();
	const [formData, setFormData] = useState<LoginFormData>({
		nickname: '',
		password: '',
	});
	const { from } = location.state || { from: { pathname: '/' } };
	const [login, { loading, error, data }] = useLoginLazyQuery({
		variables: formData,
		onCompleted: (data) => {
			localStorage.setItem('token', data.login.token);
			setUser(data.login.user);
			history.replace(from);
		},
		onError: (error) => {
			console.error(error);
			localStorage.removeItem('token');
			setUser(null);
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((inputValues) => ({
			...inputValues,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login();
	};

	return (
		<div className='container form-container'>
			<form
				onSubmit={handleSubmit}
				className='border rounded p-5 col-xl-6 col-md-12 col-12'
			>
				<h1 className='text-center mb-5'>Inicio de sesión</h1>
				<div className='form-floating mb-3'>
					<input
						className='form-control'
						type='text'
						name='nickname'
						id='nickname'
						placeholder='Usuario'
						onChange={handleChange}
					/>
					<label htmlFor='nickname'>Usuario</label>
				</div>
				<div className='form-floating mb-5'>
					<input
						className='form-control'
						type='password'
						name='password'
						id='password'
						placeholder='Contraseña'
						onChange={handleChange}
					/>
					<label htmlFor='password'>Contraseña</label>
				</div>
				<button
					disabled={loading}
					type='submit'
					className={`form-control btn ${
						loading ? 'btn-secondary' : 'btn-primary'
					}`}
				>
					{loading ? 'Ingresando...' : 'Ingresar'}
				</button>
				{!!error && <p>Ocurrió un error: {error.message}</p>}
			</form>
		</div>
	);
}

export default Login;
