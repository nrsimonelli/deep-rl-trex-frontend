const getModel = (state = [], action) => {
  if (action.type === 'SET_MODEL') {
    console.log('in model reducer', action.payload);
    return action.payload;
  }
  return state
};

export default getModel;