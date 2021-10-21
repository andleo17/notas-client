import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { Location } from 'history';
import { useAuth } from '../hooks/AuthContext';
import { useLoginLazyQuery, useSignUpMutation } from '../generated/graphql';

type AuthFormData = {
	nickname: string;
	password: string;
};

type LocationState = {
	from: Location<{ pathname: string }>;
};

function Auth() {
	const history = useHistory();
	const location = useLocation<LocationState>();
	const { user, setUser } = useAuth();
	const [formData, setFormData] = useState<AuthFormData>({
		nickname: '',
		password: '',
	});
	const [message, setMessage] = useState<string>();

	const { from } = location.state || { from: { pathname: '/' } };

	const [signUp, { loading: signUpLoading, error: signUpError }] =
		useSignUpMutation({
			variables: { username: formData.nickname, password: formData.password },
			onCompleted: (data) => {
				localStorage.setItem('token', data.signup.token);
				setUser(data.signup.user);
				history.replace(from);
			},
			onError: (error) => {
				console.log(error);
				localStorage.removeItem('token');
				setUser(null);
			},
		});

	const [login, { loading: loginLoading, error: loginError }] =
		useLoginLazyQuery({
			variables: formData,
			onCompleted: (data) => {
				localStorage.setItem('token', data.login.token);
				setUser(data.login.user);
				history.replace(from);
			},
			onError: (error) => {
				if (!error.message.includes('No se ha encontrado el usuario'))
					console.log(error.message);

				setMessage('Consultando en USAT...');
				signUp();
			},
		});

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (!loginLoading && !signUpLoading) setMessage('Ingresar');
		if (loginLoading) setMessage('Iniciando sesión...');
		if (signUpLoading) {
			setMessage('¡Usuario encontrado!');
			interval = setTimeout(() => {
				setMessage('Esto puede tardar varios minutos');
			}, 2000);
		}
		return () => {
			if (!!interval) clearInterval(interval);
		};
	}, [loginLoading, signUpLoading]);

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

	return !!user ? (
		<Redirect to={from.pathname} />
	) : (
		<div id='auth'>
			<form onSubmit={handleSubmit} className='auth__form'>
				<h1>Inicio de sesión</h1>
				<div className='auth__form-group'>
					<label className='auth__form-label' htmlFor='nickname'>
						Usuario
					</label>
					<input
						className='auth__form-input'
						type='text'
						name='nickname'
						id='nickname'
						placeholder='Usuario'
						onChange={handleChange}
					/>
				</div>
				<div className='auth__form-group'>
					<label className='auth__form-label' htmlFor='password'>
						Contraseña
					</label>
					<input
						className='auth__form-input'
						type='password'
						name='password'
						id='password'
						placeholder='Contraseña'
						onChange={handleChange}
					/>
				</div>
				<button
					disabled={loginLoading || signUpLoading}
					type='submit'
					className='btn'
				>
					{message}
				</button>
				{(!!loginError || !!signUpError) && (
					<p>Ocurrió un error: {loginError?.message || signUpError?.message}</p>
				)}
			</form>
		</div>
	);
}

export default Auth;
