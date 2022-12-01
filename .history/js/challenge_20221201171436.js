// Spec
/*
See the timer increment every second once the page has loaded.
--DONE
Manually increment and decrement the counter using the plus and minus buttons.
--DONE 

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

const likesList = document.querySelector('.likes');

let countVal = 0;
const counterLikes = [];
const counterIsActive = true;



// Functions & Listeners
minusBtn.addEventListener('click', decrementCounter);
plusBtn.addEventListener('click', incrementCounter);
heartBtn.addEventListener('click', likeCounter);
counter.addEventListener('onChange', incrementAr)

function launchCounter () {
    setInterval(() => incrementCounter(), 1000, counterIsActive);
    /*
    //Example of multiple functions in setInterval
    setInterval(function () {
        fakeFunction();
        incrementCounter();

    },
    1000)
    */
}

function likeCounter () {
    console.log(`countVal: ${countVal}`);
    
    //const likeItem = document.createElement('li');
    
    counterLikes.find(isCurrentCounter);

    function isCurrentCounter(counter){
        console.log(`counter name: ${counter.name}`);
        console.log(counter.name === countVal.toString());
        return counter.name === countVal.toString();
    }

    /*
    const inventory = [
        { name: "apples", quantity: 2 },
        { name: "bananas", quantity: 0 },
        { name: "cherries", quantity: 5 },
      ];
      
      function isCherries(fruit) {
        return fruit.name === "cherries";
      }
      
      console.log(inventory);
      console.log(inventory.find(isCherries));
      */
    
   
    /*
    let counterLikesTotalMsg;
    counterNum.likesTotal
    const msg = `${counter.textContent} has been liked ${counterNum.likes}`;
    likeCounter.textContent =
    */
}

function incrementCounter () {
    countVal++;
    counter.textContent = countVal; 
}

function decrementCounter () {
    countVal--;
    counter.textContent = countVal; 
}

function pauseCounter () {
    
}

launchCounter();