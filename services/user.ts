import api from './api';
import User from '../DTOs/user';

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User;
}

interface ValidateTokenResponse {
  data: User;
}

const UserService = {
  signIn: ({ email, password }: SignInData) => {
    return api.post<SignInResponse>('auth/v1/user/sign_in', {
      email, 
      password
    });
  },
  validateToken: () => {
    return api.get<ValidateTokenResponse>('auth/v1/user/validate_token')
      .then(resp => resp?.data);
  }
}

export default UserService;