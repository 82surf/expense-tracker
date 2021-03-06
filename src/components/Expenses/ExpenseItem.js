import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const expense = props.expense;
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
