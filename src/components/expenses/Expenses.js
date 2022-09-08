import { useState } from "react";
import Card from "../common/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.expenses.filter((expense) => filteredYear === expense.date.getFullYear().toString());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
