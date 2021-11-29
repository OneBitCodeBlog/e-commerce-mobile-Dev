import React, { useState, createContext, useContext, useEffect } from 'react';
import User from '../DTOs/user';
import UserService from '../services/user';

interface AuthProps {
  loggedUser?: User;
  setLoggedUser?: any;
  isLoading?: boolean;
};

const AuthContext = createContext<AuthProps>({} as AuthProps);

const AuthProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const validate = async () => {
      try {
        const resp = await UserService.validateToken();

        const { id, email, name } = resp?.data;
        setLoggedUser({ id, email, name });
      } catch(error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    validate();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}

export default AuthProvider;