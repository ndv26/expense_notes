import React from "react";
import ExpenseItem from "../components/ExpenseItem";
const ExpenseList = ({ expenseList, removeExpense }) => {
    return (
        <div className="expense-list-container mt-4">
            <ul className="expense-list">
                {expenseList.length === 0 && (
                    <h2 className="expense-list-notice">No expense found.</h2>
                )}
                {expenseList.length > 0 &&
                    expenseList.map((expense) => {
                        return (
                            <ExpenseItem
                                key={expense.id}
                                expense={expense}
                                removeExpense={removeExpense}
                            />
                        );
                    })}
            </ul>
        </div>
    );
};

export default ExpenseList;
