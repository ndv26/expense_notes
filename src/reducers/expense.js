import storage from "../localStorage/config";

const initExspenseState = {
    expenseList: storage.get(),
};

const expenseReducer = (state = initExspenseState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            let newState = {
                ...state,
                expenseList: [action.payload, ...state.expenseList],
            };
            storage.set(newState.expenseList);
            return newState;
        case "REMOVE_EXPENSE":
            let cloneExpenseList = [...state.expenseList];
            let needRemoveExpense = cloneExpenseList.find(
                (expense) => expense.id === action.payload
            );
            let index = cloneExpenseList.indexOf(needRemoveExpense);
            cloneExpenseList.splice(index, 1);
            let otherNewState = {
                ...state,
                expenseList: [...cloneExpenseList],
            };
            storage.set(otherNewState.expenseList);
            return otherNewState;
        default:
            return state;
    }
};

export default expenseReducer;
