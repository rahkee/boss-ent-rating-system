"use strict";

var nameInput = document.getElementById('inputName');
var count = 0;
var bossBae = [];

function createBossBae() {

    var name = nameInput.value;

    if (!duplicateExists(name) && inputName.value !== "") {

        addBaeToList(name);
        inputName.value = "";
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

function addBaeToList(name) {

    bossBae.push({
        id: count + 1,
        name: name,
        rating: 0
    })

    count++;
}

inputName.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        createBossBae()
    }
}, false);
