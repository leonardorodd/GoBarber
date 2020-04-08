import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// verifica se o usuário está em ambiente de desenvolvimento
if(process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

  tron.clear();

  console.tron = tron;
}
