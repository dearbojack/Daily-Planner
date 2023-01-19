// const moment = require('moment');
// import moment from 'moment.js';

// show date of today in the jumbotron
const today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today); 

const punchIn = 9;
const punchOut = 17;

function createArr(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
};

var worktime = createArr(punchIn, punchOut);

for (let i = 0; i < worktime.length; i++) {
    var $rowDiv = $("<div class='row'></div>");
    var $hourDiv = $("<div class='hour'></div>");
    var hourText = moment().hour(worktime[i]).format('hh A');
    $hourDiv.text = hourText
    $rowDiv.appendChild($hourDiv);
    $('.container').append($rowDiv);
};