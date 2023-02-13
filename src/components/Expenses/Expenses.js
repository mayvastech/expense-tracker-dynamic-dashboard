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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.allexpenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
      </Card>
    </div>
  );
}
export default Expenses;

// map method cycles through every item in our expenses array of objects and transforms each item into ExpenseItem jsx elements in a new array.