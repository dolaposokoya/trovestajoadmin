import { call, put } from "redux-saga/effects";
import { loginUser } from './Requests'
import { loginUserAction } from '../Reducers/user.reducer'
import { SIGN_IN_SUCCESSFUL, SIGN_IN_REQUEST } from '../Actions/Actions'

export function* loginUserSaga() {
    try {
        const response = yield call(loginUser);
        const { data } = response;
        yield put(loginUserAction({ type: SIGN_IN_SUCCESSFUL, payload: data, isLogged: true, success: true, message: 'Successful' }));
    } catch (error) {
        yield put({ type: SIGN_IN_REQUEST, payload: [], isloggedIn: false, success: false, message: error.message });
    }
}

export function* allUserSaga() {
    try {
        const response = yield call(loginUser);
        const users = response.data;
        yield put({ type: SIGN_IN_SUCCESSFUL, payload: users, isloggedIn: true, success: true, message: 'Successful' });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: SIGN_IN_REQUEST, payload: {}, isloggedIn: false, success: false, message: error.message });
    }
}
