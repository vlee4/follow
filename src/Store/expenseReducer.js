//Actions
const GET_EXPENSES = "GET_EXPENSES";
const ADD_EXPENSE = "ADD_EXPENSE";

//Action Creators
const fetchExpenses = (expenses) => {
  return {
    type: GET_EXPENSES,
    expenses,
  };
};

const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense,
  };
};

export const findExpenses = () => {
  return (dispatch) => {
    if (localStorage.getItem("Expenses")) {
      const existingExp = JSON.parse(localStorage.getItem("Expenses"));
      dispatch(fetchExpenses(existingExp));
    }
  };
};

export const postExpense = (expense) => {
  return (dispatch) => {
    if (localStorage.getItem("Expenses")) {
      const existingExp = JSON.parse(localStorage.getItem("Expenses"));
      existingExp.push(expense);
      localStorage.setItem("Expenses", JSON.stringify(existingExp));
    } else {
      localStorage.setItem("Expenses", JSON.stringify([expense]));
    }
    dispatch(addExpense(expense, "complete"));
  };
};

/* state={
    adding: t/f;
    expenses: [
      { id: "-",
      date: "",
      account: "",
      category: "",
      amount: 0,}
      {},
      ...
    ]
}
*/

//Reduecr
export default function expenseReducer(state = {}, action) {
  switch (action.type) {
    case GET_EXPENSES:
      return { ...state, expenses: [...action.expenses] };
    case ADD_EXPENSE:
      return { adding: false, expenses: [...state.expenses, action.expense] };
    default:
      return state;
  }
}
