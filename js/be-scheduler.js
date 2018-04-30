"use strict";

document.addEventListener("DOMContentLoaded", function entryAccess() {
    getBossBaeDB();
    clearText();
})

var bossDB = window.localStorage;
var bossBae = [];
var nameInput = document.getElementById('inputName');
var count = 0;

inputName.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        createBossBae()
    }
}, false);

function createBossBae() {

    var name = nameInput.value;

    if (!duplicateExists(name) && inputName.value !== "") {
        addBaeToList(name);
    }

    showBossBaes();
}

function getBossBaeDB() {

    if (bossDB.length !== 0) {
        bossBae = JSON.parse(bossDB.getItem('currentSession'));
        showBossBaes();
    }
}

function saveBossBaeDB(currentBossBaeObj) {
    bossDB.setItem('currentSession', JSON.stringify(currentBossBaeObj));
}

var baeList = document.getElementById('nameList');
var lastRated = 0;

function showBossBaes() {

    console.table(bossBae);

    for (var bae of bossBae) {

        // TODO
        if (lastRated === bae.rating) {

            // Check for seniority!

            lastRated = bae.rating;

        } else if (lastRated > bae.rating){

            // lastRated should go up!

            lastRated = bae.rating;

        } else if (lastRated < bae.rating) {

            // bae.rating should go up!
            
            lastRated = bae.rating;
        }

        lastRated = bae.rating;
    }

    while (baeList.firstChild) {
        baeList.removeChild(baeList.firstChild)
    }

    for (var bae of bossBae) {

        var baeListNode = document.createElement('li');
        var baeNameText = document.createTextNode(bae.name);
        baeListNode.appendChild(baeNameText);

        var btnRateUp = document.createElement('button');
        var btnRateUpText = document.createTextNode('+');
        btnRateUp.appendChild(btnRateUpText);

        btnRateUp.addEventListener("click", function() {
            rateUp(this.previousSibling.textContent);
        }, false)

        baeListNode.appendChild(btnRateUp);
        baeList.appendChild(baeListNode);
    }
}

function rateUp(rateName) {

    for (var bae of bossBae) {

        if (bae.name === rateName) {
            bae.rating++;
        }
    }

    saveBossBaeDB(bossBae);
    showBossBaes();
}

var valMsgBox = document.getElementById('valMsgBox');
var valMsgBoxText = document.createTextNode("");

function duplicateExists(name) {

    function displayDuplicateError(name) {
        valMsgBox.appendChild(valMsgBoxText);
        valMsgBoxText.nodeValue = name + " is a duplicate entry...";
    }

    for (var bae of bossBae) {

        if (name === bae.name) {
            displayDuplicateError(name);
            return true;
        } else {
            valMsgBoxText.nodeValue = "";
        }
    }

    return false;
}

function clearText() {
    inputName.value = "";
}

function addBaeToList(name) {

    bossBae.push({
        id: count + 1,
        name: name,
        rating: 0
    })

    saveBossBaeDB(bossBae);
    count++;
}

// Check to see which Rating score is higher, then bump them up, higher than ID number...
// Check to see which ID number is lower, since they will have seniority?
// Save to MongoDB...
