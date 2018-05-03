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

function showBossBaes() {

    while (baeList.firstChild) {
        baeList.removeChild(baeList.firstChild)
    }

    // TODO: Order!
    for (var bae of bossBae) {
        console.log(bae);
    }

    // console.table(bossBae);
    console.table(baeOrder);

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

    count++;
    saveBossBaeDB(bossBae);
}

function saveBossBaeDB(currentBossBaeObj) {
    bossDB.setItem('currentSession', JSON.stringify(currentBossBaeObj));
    showBossBaes();
    bossDB.setItem('currentSessionCount', count);
}

function getBossBaeDB() {

    if (bossDB.length !== 0) {
        bossBae = JSON.parse(bossDB.getItem('currentSession'));
        showBossBaes();
        count = JSON.parse(bossDB.getItem('currentSessionCount'));
    }
}

document.addEventListener("DOMContentLoaded", function entryAccess() {
    getBossBaeDB();
    clearText();
})
