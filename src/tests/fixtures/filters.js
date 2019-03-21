import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

const altFiltersTwo = {
    text: 'Rent',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export {filters , altFilters, altFiltersTwo};