import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formDisplay, setFormdisplay] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setFormdisplay(false);
  };

  const formDisplayHandler = () => {
    setFormdisplay(true);
  };
  const formCancelHandler = () => {
    setFormdisplay(false);
  };
  //   child to parent communication metric through pointing to the function+
  return (
    <div className="new-expense">
      {!formDisplay && (
        <button onClick={formDisplayHandler}>Add New Expense</button>
      )}
      {formDisplay && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={formCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
