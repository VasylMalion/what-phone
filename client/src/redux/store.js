// core
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import {rootReducer} from "./reducers";

// sagas
import {
    getAllPhones,
    getOnePhone
} from "./sagas/phonesSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(getOnePhone)
sagaMiddleware.run(getAllPhones)

export {store}