import React from "react";

export default function ExpenseItem({ expense, removeExpense }) {
    return (
        <li className="expense-item mt-2">
            <div className="expense-item__time expense-item__flex">
                <div>{expense.date}</div>
            </div>
            <div className="expense-item__title expense-item__flex">
                <h3>{expense.title}</h3>
            </div>
            <div className="expense-item__amout expense-item__flex">
                <div>{expense.amount}</div>
            </div>
            <div className="expense-item__remove expense-item__flex">
                <div onClick={() => removeExpense(expense.id)}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </li>
    );
}
