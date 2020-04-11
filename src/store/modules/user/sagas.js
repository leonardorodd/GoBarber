import { all, takeLatest, call, put } from 'redux-saga/effects';
import { updateProfileSuccess, updateProfileFailure } from './actions';
import { toast } from 'react-toastify';

import { getData } from '../../../services/apifake';

// ...rest é o restante das informações (old, new, confirm)-password.
export function* updateProfile({ payload }){
    try {
        const { nome, email, avatar_id,...rest} = payload;

        // assign une dois objetos
        
        // se existir algum valor no oldpassword, ele irá fazer o merge
        // do primeiro objeto { name, password } com o restante (rest), se não com um objeto vazio.

        const profile = Object.assign(
            { nome, email, avatar_id }, 
            rest.oldPassword ? rest : {}
        )

        //const response = yield call(api.put, '/users', profile);


        const response = yield call(getData, true, '/users', profile)

        toast.success('Perfil Atualizado com sucesso!');

        yield put(updateProfileSuccess(response.data));

    }catch(err) {
        yield put(updateProfileFailure());
        toast.error('Erro ao atualizar o perfil');
    }
}


export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
