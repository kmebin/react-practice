import { useState } from "react";
import Card from "../common/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.expenses.filter((expense) => filteredYear === expense.date.getFullYear().toString());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
