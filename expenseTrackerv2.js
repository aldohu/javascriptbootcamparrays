const account = {
    name: "Andrew Mead",
    expenses: [],
    income: [],
    addExpense:function (description, amount) {
            this.expenses.push({
                description: description,
                amount:amount
            })
    },
    addIncome:function(description, amount) {
        this.income.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary:function(expenses,income) {
        console.log(this.income);
        let totalExpenses =  this.expenses.reduce((a,b) =>  a + b.amount,0);
        let totalIncome = this.income.reduce((a,b)=> a + b.amount,0);
        console.log(`${this.name} has $${totalIncome - totalExpenses} it has income of $${totalIncome} and expenses of $${totalExpenses}`);     
    }
}



account.addExpense("Rent", 1950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 40000);
console.log(account.getAccountSummary());