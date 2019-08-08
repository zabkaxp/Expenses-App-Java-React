package apps.expenses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ExpensesResource {

    @Autowired
    private ExpenseHardcodedService expensesService;

    @GetMapping("/users/{username}/expenses")
    public List<Expense> showAllexpenses(@PathVariable String username){
        return expensesService.showExpenses();
    }
}
