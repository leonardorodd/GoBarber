import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.svg';

// schema de validação do Yup

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});


export default function SignIn() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(formData) {

    const { email, password } = formData;

    dispatch(signInRequest(email, password))

    //console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Go Barber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to='register'>Criar Conta gratuita</Link>
      </Form>
    </>
  );
}
