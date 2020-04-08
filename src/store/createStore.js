import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer = process.env.NODE_ENV === 'development'
    ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(...middlewares) // irá trasnformar cada middleware do array em um parâmetro
    )
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);//
};
