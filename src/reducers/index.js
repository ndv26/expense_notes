import { combineReducers } from "redux";
import expenseReducer from "./expense";

const rootReducer = combineReducers({
    expenses: expenseReducer,
});

export default rootReducer;
