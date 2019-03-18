import moment from 'moment';

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
        
        // Converting both strings to lower case
        const lowerCaseDescription = expense.description.toLowerCase();
        const lowerCaseText = text.toLowerCase();
        const textMatch = lowerCaseDescription.includes(lowerCaseText);
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1;
        }
    });
};

export default getVisibleExpenses;