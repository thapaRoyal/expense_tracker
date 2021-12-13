const contextReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      const transactions = state.filter((t) => t.id !== action.payload);
      return transactions;
    case 'ADD_TRANSACTION':
      break;

    default:
      break;
  }
};

export default contextReducer;
