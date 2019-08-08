import axios from "axios";

class ExpensesService {
  retrieveExpenses = username => {
    return axios.get(`http://localhost:8080/users/${username}/expenses`);
  };
}

export default new ExpensesService();
