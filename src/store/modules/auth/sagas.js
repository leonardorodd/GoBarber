import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { signInSuccess, signFailure, signUpSuccess } from './actions';
import history from '../../../services/history';
import { toast } from 'react-toastify';

export function* signIn({ payload }){

  try {

    const { email, password } = payload;

    console.tron.log(`Email: ${email} Senha: ${password}`);
    // retorna uma promisse e é assíncrono
    // const response = yield call(api.post, '/sessions',
    //   {
    //     email,
    //     password
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // )

    function getData(success){
      return new Promise((resolve, reject)=> {
        setTimeout(() => {
          if(success){
            resolve({
              data: {
                token: 'jkhuisehrseufhsufhilushfldshulfhshlkfhlksdhlfhlksdhlfhkljsdlkfjdlsfjlk',
                user: {
                  provider: true,
                  nome: 'maria',
                  email: email
                }
              }
            })
          }else{
            reject('ASDASDAS')
          }
        }, 5000);
      });
    }

    const response = yield call(getData, true);

    const { token, user } = response.data;

    // provider prestador de serviço
    if(!user.provider) {
      toast.error('usuário não é prestador')
      return;
    }

    // add user token
    api.defaults.headers['Authorization'] = `Bearer ${token}`

    yield put(signInSuccess(token, user));

    history.push('/dashboard')

  }catch(err) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function* signUp({ payload }){

  //const { name, email, password } = payload;

  try {

    console.tron.log(payload)

    // yield call(api.post, '/users', {
    //   name,
    //   email,
    //   password,
    //   provider: true
    // })

    function getData(success){
      return new Promise((resolve, reject)=> {
        setTimeout(() => {
          if(success){
            resolve({
              data: {
                token: 'jkhuisehrseufhsufhilushfldshulfhshlkfhlksdhlfhlksdhlfhkljsdlkfjdlsfjlk',
                user: {
                  provider: true,
                  nome: 'maria',
                }
              }
            })
          }else{
            reject('ASDASDAS')
          }
        }, 5000);
      });
    }

    const response = yield call(getData, true);

    console.log(response);

    yield put(signUpSuccess())

    history.push('/');

  }catch(err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

// o redux persist é exeutado antes do resto da aplicação
export function setToken({ payload }){

  if(!payload) return;

  const { token } = payload.auth;

  if(token){
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

}

export default all ([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
