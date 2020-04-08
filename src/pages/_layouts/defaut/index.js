import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '../../../components/Header';

// children -> todos os componentes filhos de AuthLayout
export default function DefaultAuthLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

// <AuthLayout /> element AuthLayout func

DefaultAuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
