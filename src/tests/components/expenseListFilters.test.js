import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters , altFilters} from '../fixtures/filters';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;
beforeEach( () => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            setTextFilter = {setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters={filters}
        />)
});

test('should render expenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('should handle date changes', () => {
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({
        filters: filters
    });
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: filters.startDate,
        endDate: filters.endDate
    });
    expect(wrapper).toMatchSnapshot();
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'enDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe((calendarFocused));
});

