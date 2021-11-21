import React, { useState, createContext, useContext } from 'react';
import User from '../DTOs/user';

interface AuthProps {
  loggedUser?: User;
  setLoggedUser?: any;
};

const AuthContext = createContext<AuthProps>({} as AuthProps);

const AuthProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<User>();

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        setLoggedUser
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