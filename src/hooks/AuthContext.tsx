import React, { createContext, useContext, useState } from 'react';
import { UserInfoFragment } from '../generated/graphql';

type AuthProviderState = {
	user?: UserInfoFragment | null;
	setUser: React.Dispatch<
		React.SetStateAction<UserInfoFragment | undefined | null>
	>;
};

const initialState: AuthProviderState = {
	user: undefined,
	setUser: () => {},
};

const AuthContext = createContext<AuthProviderState>(initialState);

export const useAuth = () => {
	return useContext(AuthContext);
};

type AuthProviderProps = { children: React.ReactNode };

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserInfoFragment | undefined | null>(
		undefined
	);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
