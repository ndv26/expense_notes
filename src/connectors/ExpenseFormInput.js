import { connect } from "react-redux";
import ExpenseFormInput from "../components/ExpenseFormInput";
import { addExpense } from "../actions/actionCreators";

const mapStateToProps = (state) => ({
    expenseList: state.expenses.expenseList,
});

const mapActionToProps = (dispatch) => ({
    addExpense: (data) => dispatch(addExpense(data)),
});

export default connect(mapStateToProps, mapActionToProps)(ExpenseFormInput);
