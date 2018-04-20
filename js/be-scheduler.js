var array = [];

function addPerson(name){

    var newPerson = {
        "name": name,
        "isActive": true,
        "ratingPrev": 0,
        "ratingCurr": 0
    }

    return newPerson;
}

var rayCopy = addPerson("Ray");
var meCopy = addPerson("Me");

array.push(rayCopy);
array.push(meCopy);

console.log(array);

document.addEventListener("DOMContentLoaded", function(){
    // localStorage can only store strings!
    var localStorage = window.localStorage;
});

/***** Adding People to the List *****/
    // Initialize INPUT field
    // List to LOOP through array
    // LOOP through array and DISPLAY values
    // INPUT field value to add to the array
    // Save

/***** Removing People from the List *****/
    // Remove Person from array
    // LOOP through array and DISPLAY new values
    // Save

/***** Rating People *****/
    // Initialize Up and Down Buttons
    // Set Ratings, Update Object
    // Save

/***** Organize List *****/
    // List highest rating first
