import axios from "axios";

class ExpensesService {
  retrieveExpenses = username => {
    return axios.get(`http://localhost:8080/users/${username}/expenses`);
  };

  deleteExpense = (id, username) => {
    return axios.delete(
      `http://localhost:8080/users/${username}/expenses/${id}`
    );
  };

  retrieveExpense = (id, username) => {
    return axios.get(`http://localhost:8080/users/${username}/expenses/${id}`);
  };

  editExpense = (id, username, expense) => {
    return axios.put(
      `http://localhost:8080/users/${username}/expenses/${id}`,
      expense
    );
  };

  addExpense = (username, expense) => {
    console.log(expense);
    return axios.post(
      `http://localhost:8080/users/${username}/expenses`,
      expense
    );
  };
}

export default new ExpensesService();
