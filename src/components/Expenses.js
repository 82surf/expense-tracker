import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
