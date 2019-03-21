const selectExpensesTotal = (expenses) => {
    let amountsOnly = expenses.map(expense => expense.amount);
    const reducer = (acc, cur) => acc + cur;
    const getExpenseTotal = amountsOnly.reduce(reducer, 0);

    // On reduce takes two arguments, the funtion to perform
    //and the value that is starting from, reduce(reducer, 0);
    //this facilitate eraising of if statement.

    return getExpenseTotal;
};

export default selectExpensesTotal;