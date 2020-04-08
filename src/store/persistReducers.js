// Pega a estratégia de storage padrão do ambiente atual (web)
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: storage,
      whitelist: ['auth', 'user']
    },
    reducers
  );

  return persistedReducer;
}
