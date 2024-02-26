import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserProps>({
    id: "",
    name: "",
    email: "",
    token: "",
  } as UserProps);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user.name;

  useEffect(() => {
    const getUser = async () => {
      const userInfo = await AsyncStorage.getItem("@mesamaster");
      let hasUser: UserProps = JSON.parse(userInfo || "{}");

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        });
      }

      setLoading(false);
    };

    getUser();
  }, []);

  const signIn = async ({ email, password }: SignInProps) => {
    setLoadingAuth(true);

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      const data = { ...response.data };

      await AsyncStorage.setItem("@mesamaster", JSON.stringify(data));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, email, token });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAuth(false);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: "",
        name: "",
        email: "",
        token: "",
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        loading,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
