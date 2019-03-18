import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should setText filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        ...state,
        text: 'testing test'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: 'testing test',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        ...state,
        startDate: 'testing date'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: 'testing date',
        endDate: moment().endOf('month')
    });
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        ...state,
        endDate: 'testing date'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: 'testing date'
    });
});