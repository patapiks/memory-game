export const initialState = {
  state: 'greeting',
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return { state: 'active' };
    default:
      return state;
  }
};
