import React, { PropsWithChildren, createContext, useState } from "react";

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserProps>({
    id: "",
    name: "",
    email: "",
    token: "",
  } as UserProps);
  const isAuthenticated = !!user.name;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
