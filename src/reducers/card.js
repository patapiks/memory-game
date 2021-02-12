import _ from 'lodash';

const cardList = _.shuffle([
  { id: 1, name: 'USA', image: './logo01.png' },
  { id: 2, name: 'Brown', image: './logo02.png' },
  { id: 3, name: 'Blue', image: './logo03.png' },
  { id: 4, name: 'Light', image: './logo04.png' },
  { id: 5, name: 'Pens', image: './logo05.png' },
  { id: 6, name: '@', image: './logo06.png' },
  { id: 7, name: 'Laptop', image: './logo07.png' },
  { id: 8, name: 'Lion', image: './logo08.png' },
  { id: 9, name: 'USA', image: './logo01.png' },
  { id: 10, name: 'Brown', image: './logo02.png' },
  { id: 11, name: 'Blue', image: './logo03.png' },
  { id: 12, name: 'Light', image: './logo04.png' },
  { id: 13, name: 'Pens', image: './logo05.png' },
  { id: 14, name: '@', image: './logo06.png' },
  { id: 15, name: 'Laptop', image: './logo07.png' },
  { id: 16, name: 'Lion', image: './logo08.png' },
]);

export const initialState = {
  isFirst: true,
  value: null,
  listener: true,
  cards: cardList,
  uiState: [],
  matched: [],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FIRST_CARD':
      return {
        ...state,
        isFirst: false,
        value: action.payload,
        uiState: [...state.uiState, Number(action.payload.id)],
      };
    case 'CLEAR_STORE':
      return { ...initialState, uiState: [...state.matched], matched: state.matched };
    case 'BLOCK_EVENT':
      return { ...state, listener: false };
    case 'ADD_MATCHED':
      const { firstCardId, secondCardId } = action.payload;
      return { ...state, matched: [...state.matched, Number(firstCardId), Number(secondCardId)] };
    default:
      return state;
  }
};
