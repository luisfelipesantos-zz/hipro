import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;