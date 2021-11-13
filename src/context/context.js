import React, { useReducer, creteContext } from 'react';

const initialState = [];

const ExpenseTrackerContext = creteContext(initialState);

export const Provider = ({ children }) => {
  return (
    <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker' }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
