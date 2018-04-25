"use strict";

var count = 0;
var bossBae = [];

var nameInput = document.getElementById('inputName');

inputName.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        createBossBae()
    }
}, false);

function createBossBae() {

    var name = nameInput.value;

    if (!duplicateExists(name) && inputName.value !== "") {
        addBaeToList(name);
    } else {
        displayDuplicateError(name)
    }

    showBossBaes();
}

var baeList = document.getElementById('nameList');

function showBossBaes() {

    while (baeList.firstChild) {
        baeList.removeChild(baeList.firstChild)
    }

    for (var bae of bossBae) {
        var baeListNode = document.createElement('li');
        var baeNameText = document.createTextNode(bae.name);
        baeListNode.appendChild(baeNameText);
        baeList.appendChild(baeListNode);
    }
}

function duplicateExists(name) {

    for (var bae of bossBae) {

        if (name === bae.name) {
            return true;
        }
    }

    return false;
}

var valMsgBox = document.getElementById('valMsgBox');
var valMsgBoxText = document.createTextNode("");

function displayDuplicateError(name) {
    valMsgBox.appendChild(valMsgBoxText);
    valMsgBoxText.nodeValue = name + " is a duplicate entry...";
}

function addBaeToList(name) {

    bossBae.push({
        id: count + 1,
        name: name,
        rating: 0
    })

    count++;
    inputName.value = "";
    valMsgBoxText.nodeValue = "";
}

inputName.value = "";
