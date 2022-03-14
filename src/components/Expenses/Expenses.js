import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import Dropdown from './Dropdown';

function Expenses(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  const selectYearHandler = (year) => {
    props.onSelectYear(year);
  };

  return (
    <Card className="expenses">
      <Dropdown onSelectYear={selectYearHandler} />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
