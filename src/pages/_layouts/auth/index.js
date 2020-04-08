import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

// children -> todos os componentes filhos de AuthLayout
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

// <AuthLayout /> element AuthLayout func

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
