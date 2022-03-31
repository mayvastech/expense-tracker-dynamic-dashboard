import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  function clickHandler() {
    alert("clicked");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
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