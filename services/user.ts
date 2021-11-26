import api from './api';
import User from '../DTOs/user';

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User;
}

const UserService = {
  signIn: ({ email, password }: SignInData) => {
    return api.post<SignInResponse>('auth/v1/user/sign_in', {
      email, 
      password
    });
  }
}

export default UserService;