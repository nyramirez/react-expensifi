import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses' ;
import numeral from 'numeral';

export const ExpensesSummary = ({ totalNumberOfExpenses, sumOfExpensesDisplayed }) => {
    const wordExpense = totalNumberOfExpenses === 1 ? 'expense' : 'expenses';
    const formatedExpenseTotal = numeral(sumOfExpensesDisplayed / 100).format('$0,0.00');

    return(
        <div className="page-header">
            <div className="content-container"> 
                <h1 className="page-header__title">
                Viewing <span>{totalNumberOfExpenses}</span> {wordExpense} totalling <span>{formatedExpenseTotal}</span>
                 </h1>
                 <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                 </div>
            </div>
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