import { all } from 'redux-saga/effects';
import modelSaga from './modelSaga';
import runSaga from './runSaga';


export default function* rootSaga() {
  yield all([modelSaga(), runSaga()]);
};