import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  let title = props.title;

  function clickHandler() {
    alert("clicked");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// See Card.js notes

// initially css classname styles became missing on Card compo- expense-item has to be configured within custom components e.g Card compo.
// Good function naming convention- if function triggered upon event call them "..Handler" a function attached to an event listener

// React goes through all components (executes the functions) and evaluates them into DOM instructions to render onto screen.
// The problem with this is React evaluates everything once, when the app is initially rendered.
// In modern apps typically want to update elements on screen e.g when button clicked- need a way of telling react something changed and to re-evaluate certain components => State

// Import useState in curly brackets- useState is a function
// Using useState--> Call it in Component function before jsx return statement--> function() { useState() return} ;
// useState is a Hook- All Hooks start with "use"
