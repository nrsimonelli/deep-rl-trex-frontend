import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getModel( action ) {
  console.log( 'In getModelSaga', action.type );
  try {
    const response = yield axios.get( '/api/model' );

    console.log( 'Got a response', response.data );
    yield put({ type: 'SET_MODEL', payload: response.data });
  } catch (error) {
    console.error('Error getting model', error);
  }
}; // end getModel


function* modelSaga() {
  
  yield takeLatest( 'GET_MODEL', getModel );
  
}

export default modelSaga;