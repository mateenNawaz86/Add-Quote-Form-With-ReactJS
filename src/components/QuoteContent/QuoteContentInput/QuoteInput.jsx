import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./QuoteInput.css";

const QuoteInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddQuote(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Enter New Quotes</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Quote</Button>
      <p id='caption'>Mirani ❤️</p>
    </form>
  );
};

export default QuoteInput;
