"use strict";

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

var baeList = document.getElementById('nameList');
var baeOrder = [];
var lastRated = 0;

function showBossBaes() {

    // TODO
    bossBae.forEach(function orderInBae(bae) {
        console.log("Order the baes!");
    });

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

    clearText();
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

    debugger

    bossBae.push({
        id: count + 1,
        name: name,
        rating: rateUp(symbol)
    })

    saveBossBaeDB(bossBae);
    count++;
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

document.addEventListener("DOMContentLoaded", function entryAccess() {
    getBossBaeDB();
    clearText();
})
