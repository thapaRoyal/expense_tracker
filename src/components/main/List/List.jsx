import React, { useContext } from 'react';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../context/context';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(ExpenseTrackerContext);

  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: '1000',
      date: 'Wed dec 16 2021',
    },
    {
      id: 2,
      type: 'Expense',
      category: 'Food',
      amount: '500',
      date: 'Wed dec 16 2021',
    },
    {
      id: 3,
      type: 'Income',
      category: 'Pets',
      amount: '1000',
      date: 'Wed dec 16 2021',
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
