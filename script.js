import moment from 'moment';

// show date of today in the jumbotron
const today = moment().format("dddd, MMMM Do");
$('#currentDay').append(today); 