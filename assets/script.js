// const moment = require('moment');
// import moment from 'moment.js';

// show date of today in the jumbotron
const today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today); 

// work start end hour (can change to debug)
var currentHour = moment().hour();
const punchIn = 9;
const punchOut = 17;

for (var i = punchIn; i <= punchOut; i++) {
    // create the row and add class
    var row = $("<div>").addClass("row time-block");
    // create hour col and add class
    var hourText = moment().hour(i).format('hh A');
    var hourCol = $("<div>").addClass("col-1 hour").text(hourText);
    // create text area and add class
    var textArea = $("<textarea>").addClass("col-10 description");
    // create save button and add class
    var saveBtn = $("<button>").addClass("col-1 saveBtn");
    // create save button img
    var $saveBtnImg = $("<img src='assets/img/save.png' alt='save' class='save-img'>");
    // add save btn img to button
    saveBtn.append($saveBtnImg);
    // append all to the row
    row.append(hourCol, textArea, saveBtn);
    // append row to container
    $(".container").append(row);

    // change color of timeblock based on current day
    if (i > currentHour) {
        // the future is green
        textArea.addClass('future');
    } else if (i === currentHour) {
        // the present is red
        textArea.addClass('present');
    } else {
        // the past is gray
        textArea.addClass('past');
    };
};

// saveBtn eventListener
$(".saveBtn").on("click", function() {
    // get text area text value
    var textAreaValue = $(this).prev().val();
    // get hour col key value
    var hourKey = $(this).prev().prev().text();
    console.log(textAreaValue);
    console.log(hourKey);
    // store key value in localStorage
    localStorage.setItem(hourKey, textAreaValue);
});

// load data from localStorage
// set description of each row to text area value in localStorage
$(".description").each(function () {
    // get hourKey of current row
    var hourKey = $(this).prev().text(); // here $(this) is the description
    // get textArea value in localStorage
    var description = localStorage.getItem(hourKey);
    // set description to saved textAreaValue
    $(this).val(description);
})