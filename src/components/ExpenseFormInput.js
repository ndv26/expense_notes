import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ExpenseFormInput = ({ addExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setDate(e.target.value.toString());
    };

    const userInputData = {
        id: uuidv4(),
        title,
        amount,
        date,
    };

    return (
        <div className="expense-form-input-container">
            <form>
                <div className="form-group mt-2">
                    <label htmlFor="form-control-title">Title</label>
                    <input
                        id="form-control-title"
                        type="text"
                        className="form-control"
                        placeholder="Add title..."
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="form-control-amount">Amount</label>
                    <input
                        id="form-control-amount"
                        type="text"
                        className="form-control"
                        placeholder="Add amount..."
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="date-control-date">Date</label>
                    <input
                        id="form-control-date"
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <button
                    className="btn btn-danger btn-custom mt-3"
                    onClick={(e) => {
                        e.preventDefault();
                        if (
                            title.trim() === "" ||
                            amount.trim() === "" ||
                            date.trim() === ""
                        ) {
                            alert("Please complete the form before adding");
                        } else {
                            addExpense(userInputData);
                            setTitle("");
                            setAmount("");
                            setDate("");
                        }
                    }}
                >
                    Add expense
                </button>
            </form>
        </div>
    );
};

export default ExpenseFormInput;
