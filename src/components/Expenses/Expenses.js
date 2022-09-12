import React, { useState } from "react";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredExpense, setFilteredExpense] = useState("2020");

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredExpense(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filteredExpense
  );

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredExpense}
            onChangeFilter={onFilterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
