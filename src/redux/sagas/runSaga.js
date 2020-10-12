import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getRun() {
    try {
        console.log('in run saga');

        const response = yield axios.get('/api/run');

        console.log('put in run saga,', response.data);
        yield put({ type: 'SET_RUN', payload: response.data });


    } catch (error) {
        console.error('SET RUN failed', error);
    }
};

function* runSaga() {
    yield takeEvery('GET_RUN', getRun);
};

export default runSaga;