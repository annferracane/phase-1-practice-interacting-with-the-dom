// Spec
/*
See the timer increment every second once the page has loaded.
Manually increment and decrement the counter using the plus and minus buttons.
"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
Pause the counter, which should:
pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume"
Click the "restart" button to restart the counter and re-enable the buttons.
Leave comments on my gameplay, such as: "Wow, what a fun game this is."
*/

// DOM Elements & Global Variables
const counter = document.querySelector('#counter');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const heartBtn = document.querySelector('#heart');
const pauseBtn = document.querySelector('#pause');

const countVal = 0;
const counterIsActive = true;



// Functions

function counterTime () {
    setInterval(() => incrementCounter(), 1000, counterIsActive);
}

function likeCounter () {
    
}

function incrementCounter () {
    //countVal+=1;
    console.log(countVal);
    //counter.textContent = countVal; 
}

function decrementCounter () {
    
}

function pauseCounter () {
    
}

counterTime ();