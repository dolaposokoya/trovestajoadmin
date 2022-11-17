import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../Reducers/user.reducer'
import { addAgentReducer } from '../Reducers/admin.reducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './root.saga'


// mount it on the Store
const reducer = combineReducers({
    auth: loginReducer,
    agent: addAgentReducer
})
const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
const store = createStore(reducer, {}, applyMiddleware(...middleware))

// then run the saga
sagaMiddleware.run(watcherSaga)

// export default configureStore({
//     reducer: {
//       auth: loginReducer
//   }
// })

export default store