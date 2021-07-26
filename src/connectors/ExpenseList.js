import { connect } from "react-redux";
import ExpenseList from "../components/ExpenseList";
import { removeExpense } from "../actions/actionCreators";

const mapStateToProps = (state) => ({
    expenseList: state.expenses.expenseList,
});

const mapActionToProps = (dispatch) => ({
    removeExpense: (id) => dispatch(removeExpense(id)),
});

export default connect(mapStateToProps, mapActionToProps)(ExpenseList);
