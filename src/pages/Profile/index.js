import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useSelector, useDispatch } from 'react-redux';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

export default function Profile() {

  const { profile } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSubmit(formData) {
    dispatch(updateProfileRequest(formData));
  }

  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar"/>
        <Input name="nome" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input type="password" name="confirmPassword" placeholder="Confirmação de senha" />
        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut} >Sair do GoBarber</button>
    </Container>
  );
}

