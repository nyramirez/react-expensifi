import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses' ;
import numeral from 'numeral';

export const ExpensesSummary = ({ totalNumberOfExpenses, sumOfExpensesDisplayed }) => {
    const wordExpense = totalNumberOfExpenses === 1 ? 'expense' : 'expenses';
    const formatedExpenseTotal = numeral(sumOfExpensesDisplayed / 100).format('$0,0.00');

    return(
        <div>
            <h1>
                {`Viewing ${totalNumberOfExpenses} ${wordExpense} totalling ${formatedExpenseTotal}`} 
            </h1>
        </div>
    )

};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    
    return {
        totalNumberOfExpenses: visibleExpenses.length,
        sumOfExpensesDisplayed: selectExpensesTotal(visibleExpenses)
    };
};


export default connect(mapStateToProps)(ExpensesSummary);