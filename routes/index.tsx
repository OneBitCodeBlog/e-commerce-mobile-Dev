import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Loading from '../components/Loading';

import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
  const { loggedUser, isLoading } = useAuth();

  return (
    isLoading ?
      <Loading/> :
      loggedUser ? <AppRoutes/> : <AuthRoutes/>
  );
}

export default Routes;