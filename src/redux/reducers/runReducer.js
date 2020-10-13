const getRun = (state = [], action) => {
  if (action.type === 'SET_RUN') {
      console.log('in run reducer', action.payload);
      return action.payload;
  }
  return state
};

export default getRun;