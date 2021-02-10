export const addCard = (card) => ({
  type: 'ADD_FIRST_CARD',
  payload: card,
});

export const clearStore = () => ({
  type: 'CLEAR_STORE',
});

export const blockEvent = () => ({
  type: 'BLOCK_EVENT',
});
