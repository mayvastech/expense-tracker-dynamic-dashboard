import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
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

// Import { useState } in curly brackets- useState is a function
// useState() returns an array of 2 elements- current value AND Updating function
// Using useState--> Call it in Component function before jsx return statement--> function() { useState(); return } ;
// useState wants a default initial state value--> creates "special variable" where changes leads to component re-evalution.
// useState is a Hook- All Hooks start with "use"

// If there is data that changes and should be reflected in UI- Need to use State

// useState(initial value)
// |
// |
// v
// const [variable current state, updating function] = useState(initial value)
// Array destructuring technique above stores both elements in separate variables

// State is separated on a per component instance basis