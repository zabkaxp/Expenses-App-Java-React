package apps.expenses;

import java.util.Date;

public class Expense {

    private long id;
    private String description;
    private String username;
    double amount;
    private String type;



    public Expense(long id, String description, String username, double amount, String type) {
        this.id = id;
        this.description = description;
        this.username = username;
        this.amount = amount;
        this.type = type;


    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
