import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  // para todos os elementos

  * {
    margin: 0;
    padding: 0;
    outline: 0; // borda TAB
    box-sizing: border-box;
  }

  // desabilita a borda TAB em todos elementos que recebem focus ex: inputs e botões
  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%; // ocupa todo o espaço disponível
  }

  body {
    -webkit-font-smoothing: antialiased; // antiserrilhado nas fontes
  }

  // o input e o button nãp herdam a fonte do componente pai por padrão
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
