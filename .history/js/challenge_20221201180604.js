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
const counterIsActive = true;


// Functions & Listeners
minusBtn.addEventListener('click', decrementCounter);
plusBtn.addEventListener('click', incrementCounter);
heartBtn.addEventListener('click', likeCounter);
pauseBtn.addEventListener('click', pauseCounter);

// Decrement counter by 1
function decrementCounter () {
    countVal--;
    counter.textContent = countVal; 
    
}

// Increment counter by 1
function incrementCounter () {
    countVal++;
    counter.textContent = countVal; 
}

// Append list item to DOM to show how many times that number has been liked
function likeCounter () {    
    const currentCount = counter.textContent;
    console.log(currentCount);
    const likeListItem = document.querySelector(`#like-${currentCount}`);
    console.log(likeListItem);


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

function pauseCounter() 

// Initialize counter
function launchCounter () {
    // setInterval(() => incrementCounter(), 1000, counterIsActive);
    setInterval(function () {
        incrementCounter();
    },
    1000)
    
}



function pauseCounter () {
    
}

launchCounter();