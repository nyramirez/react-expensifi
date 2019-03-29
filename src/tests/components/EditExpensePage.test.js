import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, startRemoveExpense, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() }
    startRemoveExpense = jest.fn();
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            history={history} 
            startRemoveExpense={startRemoveExpense}
            expense={expenses[2]}
        />);

});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith({id: expenses[2].id});
});