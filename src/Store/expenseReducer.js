//Actions
const GET_EXPENSES = "GET_EXPENSES";
const ADD_EXPENSE = "ADD_EXPENSE";
const TOGGLE_ADDITION = "TOGGLE_ADDITION";

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

const toggleForm = (status) => {
  return {
    type: TOGGLE_ADDITION,
    status,
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

export const toggleEntry = (status) => {
  return (dispatch) => {
    dispatch(toggleForm(status));
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
export default function expenseReducer(
  state = { expenses: [], adding: false },
  action
) {
  switch (action.type) {
    case GET_EXPENSES:
      return { ...state, expenses: [...action.expenses] };
    case ADD_EXPENSE:
      return { adding: false, expenses: [...state.expenses, action.expense] };
    case TOGGLE_ADDITION:
      return { ...state, adding: action.status };
    default:
      return state;
  }
}
