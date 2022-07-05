const initialState = {
  currentUser: 1,
};
export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'select':
      return {...state, currentUser: payload};
    default:
      return state;
  }
};
