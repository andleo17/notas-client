import React, { createContext, useContext, useState } from 'react';
import { User } from '../generated/graphql';

type AuthProviderState = {
	user: Partial<User> | null;
	setUser: React.Dispatch<React.SetStateAction<Partial<User> | null>>;
};

const initialState: AuthProviderState = {
	user: null,
	setUser: () => {},
};

const AuthContext = createContext<AuthProviderState>(initialState);

export const useAuth = () => {
	return useContext(AuthContext);
};

type AuthProviderProps = { children: React.ReactNode };

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<Partial<User> | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
