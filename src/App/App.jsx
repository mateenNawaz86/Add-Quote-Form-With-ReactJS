import React, { useState } from "react";

import QuoteList from "../components/QuoteContent/QuoteContentList/QuoteList";
import QuoteInput from "../components/QuoteContent/QuoteContentInput/QuoteInput";
import "./App.css";

const App = () => {
  const [enteredQuote, setEnteredQuote] = useState([
    {
      text: "Success is getting what you want, happiness is wanting what you get!",
      id: "g1",
    },
    {
      text: "Setting goals is the first step in turning the invisible into the visible!",
      id: "g2",
    },
  ]);

  const addGoalHandler = (enteredText) => {
    setEnteredQuote((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setEnteredQuote((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let contentText = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (enteredQuote.length > 0) {
    contentText = (
      <QuoteList items={enteredQuote} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <QuoteInput onAddQuote={addGoalHandler} />
      </section>
      <section id="goals">{contentText}</section>
    </div>
  );
};

export default App;
