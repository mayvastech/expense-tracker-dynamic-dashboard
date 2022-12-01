import "./NewExpense.css";
import { useState } from "react";

function NewExpense() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // useState to save form value into a variable if component reloads
  // initial state of input should be empty string as nothing is entered. Value of changeevent inputs are ALWAYS STRING
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // Alternate state method- All 3 states related to store user input form- can use 1 State which stores others into a State Object. HOWEVER this 1 combined state WILL result in depending on an old snapshot of state when updating current state

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // Above technique may not obtain latest state snapshot as react schedules state updates and if lots of states are scheduled it may obtain an older state than the latest when copying in old states via spread oeprator in the combined state approach
    
    // setUserInput(function (prevState) {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // Using prevState will guarantee using using the most recent state snapshot when updating current state. USE THIS when updating state thats dependent on previous state
  }
  // spread operator extracts and retains the other saved values in userInput i.e enteredAmount and enteredDate
  // Spread operator first as it saves all 3 userInput state object values and just overwrites the enteredTitle

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
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

// Use Handler word in event-listener function as a convention to describe a function executing upon user event
// onChange event listener listens for input field value change. Useful for React forms. onInput and onChange both listen for keystrokes but onChange is universal for all input types including dropdowns.

// An event-listener function (handler) returns an Event object which contains useful metadata- target input’s id, name, and current value.
// We can access the target input’s value inside of the handleChange by accessing e.target.value. Therefore, to log the name of the input field, we can log e.target.name.
