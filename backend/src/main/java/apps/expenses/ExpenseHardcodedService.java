package apps.expenses;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExpenseHardcodedService {

    public static List<Expense> expenses= new ArrayList<>();
    static int counter=0;
    static {
        expenses.add(new Expense(++counter, "extraLessons", "marta", 22.50,  "outcome"));
        expenses.add(new Expense(++counter, "freelanceJob", "marta", 1542,  "income"));

        expenses.add(new Expense(++counter, "shopping", "marta", 61.32,  "outcome"));
        expenses.add(new Expense(++counter, "makeUp", "marta", 70,  "outcome"));
    }
public List<Expense> showExpenses(){
        return expenses;
}

public Expense removeExpense(long id) {
    for (Expense expense : expenses) {
        if (id == expense.getId()) {
            if (expenses.remove(expense)) {
                return expense;
            }
        }
    }return null;
}
public Expense retrieveExpense(long id){
        for(Expense expense: expenses){
            if(id==expense.getId()){
                return expense;
            }
        }
    return null;
}

public Expense editExpense(Expense newExpense){
removeExpense(newExpense.getId());
        expenses.add(newExpense);

return newExpense;
}

public Expense addExpense(Expense expense){
        expense.setId(++counter);
        expenses.add(expense);
        return expense;
}

}
