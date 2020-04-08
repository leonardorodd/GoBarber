import React from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Dashboard() {

  return (
    <div>{api.defaults.headers.Authorization}</div>
  );
}
