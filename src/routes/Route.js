import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/defaut';

import api from '../services/api';

import { store } from '../store';
// ...rest todo o restante das propriedades que o componente recebeu
// (path, exact e etc)
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const { signed, token } = store.getState().auth;

  // if (token) {
  //   api.defaults.headers['Authorization'] = `Bearer ${token}`
  // } else {
  //   delete api.defaults.headers['Authorization'];
  // }

  if(!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return(
    //<Route {...rest} component={Component}>
    <Route {...rest}
      render={props => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.elementType.isRequired || PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
