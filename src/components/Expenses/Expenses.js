import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.allexpenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
      </Card>
    </div>
  );
}
export default Expenses;

// Map method cycles through every item in our expenses array of objects and transforms each item into ExpenseItem jsx elements in a new array.
// Key prop is a unique value- helps react identify the individual items to update and render lists correctly