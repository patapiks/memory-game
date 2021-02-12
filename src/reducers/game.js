export const initialState = {
  state: 'greeting',
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return { state: action.payload };
    default:
      return state;
  }
};
