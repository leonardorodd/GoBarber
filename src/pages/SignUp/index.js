import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

// schema de validação do Yup

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});


export default function SignUp() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit(data) {

    const { name, email, password } = data;

    dispatch(signUpRequest(name, email, password))

  }

  return (
    <>
      <img src={logo} alt="Go Barber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">{ loading ? 'Carregando...' : 'Cadastrar'}</button>
        <Link to='/'>Já tenho conta</Link>
      </Form>
    </>
  );
}
