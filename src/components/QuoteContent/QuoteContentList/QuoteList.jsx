import React from "react";

import QuoteItem from "../QuoteContentItem/QuoteItem";
import "./QuoteList.css";

const QuoteList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <QuoteItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </QuoteItem>
      ))}
    </ul>
  );
};

export default QuoteList;
