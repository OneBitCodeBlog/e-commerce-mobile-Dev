import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
  const { loggedUser } = useAuth();

  return (
    loggedUser ? <AppRoutes/> : <AuthRoutes/>
  );
}

export default Routes;