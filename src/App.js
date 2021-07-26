import "./App.css";
import Header from "./components/Header";
import ExpenseFormInput from "./connectors/ExpenseFormInput";
import ExpenseList from "./connectors/ExpenseList";

function App() {
    return (
        <div className="App">
            <div className="App-wrapper">
                <Header />
                <div className="expense-form-input">
                    <ExpenseFormInput />
                </div>
                <div>
                    <ExpenseList />
                </div>
            </div>
        </div>
    );
}

export default App;
