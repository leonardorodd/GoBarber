import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {

  const { profile } = useSelector(state => state.user)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.nome}</strong>
              <Link to='/profile'>Meu Perfil</Link>
            </div>
            <img
              src={profile.avatar.url || "imagem default"}
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
