import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { store } from '../../store';
import logo from '../../assets/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {

  const [ user, setUser ] = useState({});

  useEffect(()=> {
    const { profile } = store.getState().user;

    setUser(profile)
  }, [])

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
              <strong>{user.nome}</strong>
              <Link to='/profile'>Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
