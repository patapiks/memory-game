export const initialState = {
  isFirst: true,
  value: null,
  listener: true,
};
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FIRST_CARD':
      return { ...state, isFirst: false, value: action.payload };
    case 'CLEAR_STORE':
      return initialState;
    case 'BLOCK_EVENT':
      return { ...state, listener: false };
    default:
      return state;
  }
};
