import React from 'react'; // Import básico do React
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'    // persistir o estado dos reducers
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'; // Utilizado para gerenciamento de rotas

import './config/ReactotronConfig';
import Routes from './routes'; // Rotas do projeto
import history from './services/history'; // Utilizado para navegação entre rotas
import GlobalStyle from './styles/global';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
