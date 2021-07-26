const expenseKey = "EXPENSES";

const storage = {
    get: () => {
        return JSON.parse(localStorage.getItem(expenseKey)) || [];
    },
    set: (data) => {
        localStorage.setItem(expenseKey, JSON.stringify(data));
    },
};

export default storage;
