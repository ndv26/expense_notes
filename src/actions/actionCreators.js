export const addExpense = (expenseItem) => ({
    type: "ADD_EXPENSE",
    payload: expenseItem,
});

export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    payload: id,
});
