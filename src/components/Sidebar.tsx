import { Link, LinkProps } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import userPhotoPlaceholder from '../assets/user-placeholder.png';

const routes: LinkProps[] = [
	{ to: '/', children: 'Inicio' },
	{ to: '/grades', children: 'Notas' },
	{ to: '/enrollments', children: 'Matrículas' },
	{ to: '/courses', children: 'Cursos' },
];

function Sidebar() {
	const { user, setUser } = useAuth();

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	return (
		<div id='sidebar'>
			<h1 className='sidebar__brand'>Notas USAT</h1>
			<nav className='sidebar__menu'>
				{routes.map((r, i) => (
					<Link {...r} className='sidebar__menu-button' key={i} />
				))}
			</nav>
			<div className='sidebar__user'>
				<img
					className='sidebar__user-photo'
					src={userPhotoPlaceholder}
					alt='User'
				/>
				<div className='sidebar__user-info'>
					<div className='sidebar__user-name'>
						<span>{user?.name} </span>
						<span>{user?.lastname}</span>
					</div>
					<div className='sidebar__user-school'>
						<span>{user?.curriculum?.school.name}</span>
					</div>
				</div>
			</div>
			<button type='button' onClick={logout}>
				Cerrar sesión
			</button>
		</div>
	);
}

export default Sidebar;
