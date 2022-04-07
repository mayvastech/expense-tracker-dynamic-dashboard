import "./NewExpense.css";
import { useState } from "react";

function NewExpense() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // initial state of input should be empty string as nothing is entered. Value of inputs are ALWAYS STRING
  // Using State to store user entered value into a variable if component reloads
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  return (
    <div className="new-expense">
      <form action="">
        <div className="new-expense__controls">
          {/* Form Input Controls */}
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
export default NewExpense;

// Use Handler word in function as a convention to ddscribe upon user event
// onChange event listener listens for input field value change. Useful for React forms

// An onChange event handler returns an Event object which contains useful metadata- target input’s id, name, and current value.
// We can access the target input’s value inside of the handleChange by accessing e.target.value. Therefore, to log the name of the input field, we can log e.target.name.
