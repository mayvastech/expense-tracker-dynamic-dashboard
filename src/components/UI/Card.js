import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;

// initially css classname styles became missing on Card compo- expense-item has to be configured within custom components e.g Card compo using list of classnames in the const which is now set on the div of this Card compo.


// ExpenseItem and Expenses container div have shared styles- box shadow + border radius- put them in new Card.css re-usable Card component
// Cant just immediately use custom components as wrappers around other jsx content
// Inject jsx content into a Component-
// Initially Card component swallows entire jsx content inside it- Doesnt know what to do with wrapped content
// Solution- Special Children prop by passing content between open close tags- content then exposed under special prop inside actual wrapping component. Children prop holds content between open close tags.
