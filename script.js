// const moment = require('moment');
// import moment from 'moment.js';

// show date of today in the jumbotron
const today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today); 

const punchIn = 0;
const punchOut = 24;
var currentHour = moment().hour();

function createArr(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
};

var worktime = createArr(punchIn, punchOut);

for (let i = 0; i < worktime.length; i++) {
    // hour row
    var $rowDiv = $("<div class='row'></div>");
    // hour cell
    var $hourDiv = $("<div class='hour'></div>");
    // hour text
    var hourText = moment().hour(worktime[i]).format('hh A');
    // set hour text of hour cell
    $hourDiv.text(hourText);
    // time block with text are in it
    var $timeblock = $("<div class='time-block'></div>");
    // save button
    var $saveBtn = $("<button class='saveBtn'></button>")

    // change color of timeblock based on current day
    if (currentHour < worktime[i]) {
        // the past
        $timeblock.addClass('past');
    } else if (currentHour = worktime[i]) {
        // the present
        $timeblock.addClass('present');
    } else {
        // the future
        $timeblock.addClass('future');
    };


    // append to hour row
    $rowDiv.append($hourDiv, $timeblock, $saveBtn);
    $('.container').append($rowDiv);
};