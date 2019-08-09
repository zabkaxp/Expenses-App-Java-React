package apps.expenses;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @DeleteMapping("users/{username}/expenses/{id}")
    public Void removeExpense(@PathVariable String username, @PathVariable long id){

        Expense newExpense = expensesService.removeExpense(id);
        if(newExpense!=null){
             ResponseEntity.noContent().build();
        }else{
            ResponseEntity.notFound().build();
        }return null;
    }

    @GetMapping("users/{username}/expenses/{id}")
    public Expense retieveExpense(@PathVariable String username, @PathVariable long id){
        return expensesService.retrieveExpense(id);
    }
}
