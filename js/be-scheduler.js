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
        console.log(bae);
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

        btnRateUp.addEventListener("click", function(a) {
            rateUp(a);
        }, false)

        baeListNode.appendChild(btnRateUp);
        baeList.appendChild(baeListNode);
    }

    clearText();
}

function rateUp(a) {

    var buttonName = a.originalTarget.previousSibling.data;

    for (var bae of bossBae) {

        if (bae.name === buttonName) {
            bae.rating++;
        }
    }

    saveBossBaeDB(bossBae);
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
        rating: 0,
    });

    saveBossBaeDB(bossBae);
    count++;
}

function saveBossBaeDB(currentBossBaeObj) {
    bossDB.setItem('currentSession', JSON.stringify(currentBossBaeObj));
}

function getBossBaeDB() {

    if (bossDB.length !== 0) {
        bossBae = JSON.parse(bossDB.getItem('currentSession'));
        showBossBaes();
    }
}

document.addEventListener("DOMContentLoaded", function entryAccess() {
    getBossBaeDB();
    clearText();
})
