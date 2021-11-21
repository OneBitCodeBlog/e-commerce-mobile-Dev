import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.
    string().
    required('E-mail obrigatório').
    email('Digite um e-mail válido'),
  password: yup.
    string().
    min(6, 'Deve ter no mínimo 6 caracteres').
    required('Password obrigatório')
});

export default loginSchema;