import { takeLatest,all } from "redux-saga/effects";
import { SIGN_IN_REQUEST,AGENT_REQUEST } from "../Actions/Actions";
import { loginUserSaga } from './user.saga'
import { addAgentUserSaga } from './admin.saga'


export function* watcherSaga() {
  yield all([
    takeLatest(SIGN_IN_REQUEST, loginUserSaga),
    takeLatest(AGENT_REQUEST, addAgentUserSaga)
  ])
    // yield takeLatest(SIGN_IN_REQUEST, loginUserSaga);
    // yield takeLatest(AGENT_REQUEST, addAgentUserSaga);
  }