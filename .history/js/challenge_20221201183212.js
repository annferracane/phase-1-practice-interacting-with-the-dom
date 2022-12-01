// Spec
/*
See the timer increment every second once the page has loaded.
--DONE
Manually increment and decrement the counter using the plus and minus buttons.
--DONE 
"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
--DONE

Pause the counter, which should:
- pause the counter
- disable all buttons except the pause button
- switch the label on the button from "pause" to "resume"

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


// Functions & Listeners
minusBtn.addEventListener('click', decrementCounter);
plusBtn.addEventListener('click', incrementCounter);
heartBtn.addEventListener('click', likeCounter);
pauseBtn.addEventListener('click', pauseResumeCounter);

// Start Interval
const intervalId = setInterval(() => incrementCounter(), 1000);
/*
    // Example of how to write setInterval with multiple functions
    setInterval(function () {
        fakeFunction();
        incrementCounter();
    },
    1000)
*/

// Decrement counter by 1
function decrementCounter() {
    countVal--;
    counter.textContent = countVal; 
    
}

// Increment counter by 1
function incrementCounter() {
    countVal++;
    counter.textContent = countVal; 
}

// Append list item to DOM to show how many times that number has been liked
function likeCounter() {    
    const currentCount = counter.textContent;
    const likeListItem = document.querySelector(`#like-${currentCount}`);

    if(likeListItem) {
        console.log('liked more than once');
        const counterObj = counterLikes.find(item => item.name === currentCount);
        counterObj.likeTotal++;
        likeListItem.textContent = `${currentCount} has been liked ${counterObj.likeTotal} times`;
    }
    else {
        const newLikeList = document.createElement(`li`);
        newLikeList.id = `like-${currentCount}`;
        const counterObj = {
            name: currentCount.toString(),
            likeTotal: 1
        } 
        counterLikes.push(counterObj);
        newLikeList.textContent = `${currentCount} has been liked ${counterObj.likeTotal} time`;
        likesList.appendChild(newLikeList);
    }
}


function pauseResumeCounter () {
    /*
    Pause the counter, which should:
    - pause the counter
    - disable all buttons except the pause button
    - switch the label on the button from "pause" to "resume"
    */
   console.log(pauseBtn.textContent);
    if(pauseBtn.textContent == ' pause ') {
        // Pause Interval
        clearInterval(intervalId); 

        // Disable buttons
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heartBtn.disabled = true;

        // Change Pause Button Text
        pauseBtn.textContent = ' resume ';
        return;
    } else if(pauseBtn.textContent == ' resume ') {
        // Enable buttons
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heartBtn.disabled = false;

        // Change Pause Button Text
        pauseBtn.textContent = ' pause ';

        // Restart Interval
        setInterval(intervalId);
        return;
    }
    
}