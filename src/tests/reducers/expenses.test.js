import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense to array', () => {
    const additionalObject = {
        id: '4',
        description: 'testing adding expense',
        note: 'just a test',
        amount: 2000,
        createdAt: moment(0).add(1, 'day').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: additionalObject
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses, 
        additionalObject
    ]);
});

test('should edit expense', () => {
    const updates = {description: 'no more rent'}
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        {
            id: '1',
            description: 'no more rent',
            note: '',
            amount: 195,
            createdAt: 0
        },
        expenses[1],expenses[2]
    ]);
});

test('should not edit an expense if not found', () => {
    const updates = {description: 'no more rent'}
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]
    ]);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});