//import moment 'moment';
// We cannot require moment library, we have to use the one on the mock file with the
// funtion below.
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};