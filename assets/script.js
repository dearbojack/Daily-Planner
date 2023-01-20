// const moment = require('moment');
// import moment from 'moment.js';

// show date of today in the jumbotron
const today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today); 

// work start end hour (can change to debug)
const punchIn = 4;
const punchOut = 20;

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
    var $textarea = $("<textarea class='w-100'></textarea>");
    $timeblock.append($textarea)
    // save button
    var $saveBtn = $("<button class='saveBtn'></button>")

    // change color of timeblock based on current day
    if (moment().hour() < worktime[i]) {
        // the future is green
        $timeblock.addClass('future');

    } else if (moment().hour() === worktime[i]) {
        // the present is red
        $timeblock.addClass('present');
    } else {
        // the past is gray
        $timeblock.addClass('past');
    };
        // add event listener to button
    $(".saveBtn").on("click", function(){
        let userInput = $("textarea").val();
        localStorage.setItem(hourText, userInput);
    });
    // using Bootstrap to stylize the col
    $hourDiv.addClass('col-1');
    $timeblock.addClass('col-10');
    $saveBtn.addClass('col-1');

    // append to hour row
    $rowDiv.append($hourDiv, $timeblock, $saveBtn);
    $('.container').append($rowDiv);

    // add event listener to button
    $(".saveBtn").on("click", function(){
        let userInput = $("textarea").val();
        localStorage.setItem(hourText, userInput);
    });
};

