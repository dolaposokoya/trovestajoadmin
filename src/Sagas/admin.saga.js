import { call, put } from "redux-saga/effects";
import { createdminAgent } from './Requests'
import { createAgentAction } from '../Reducers/admin.reducer'
import { AGENT_REQUEST, CREATE_AGENT } from '../Actions/Actions'

export function* addAgentUserSaga(action) {
    try {
        const response = yield call(createdminAgent, action.payload);
        const { success, message, data } = response.data;
        if (success === true) {
            yield put(createAgentAction({ type: CREATE_AGENT, payload: data, success, message: message, loading: false }));
        }
        else {
            yield put(createAgentAction({ type: CREATE_AGENT, payload: {}, success, message: message, loading: false }));
        }
    } catch (error) {
        yield put(createAgentAction({ type: CREATE_AGENT, payload: {}, success: false, message: error.message, loading: false }));
    }
}
