var inputAddEmp = document.querySelector('.input-name');
var btnAddEmp = document.querySelector('.btn-add-name');
var nameList = document.querySelector('.name-list');
var valMsg = document.querySelector('.validation-message');

var bossLadies = [
    { "name": "Alexis Borja" },
    { "name": "Shirin Ahmadapour" },
    { "name": "Christina Rio" },
];

function addEmployee(){ // Add employee...
    // checkForDuplicate(); // Check for duplicates...
    if(checkForDuplicate() == false) {
      console.log("Yay!");
      verifiedAddition(); // Clear the input field & show success message...
    }
}

function checkForDuplicate(){
  for (var i = 0; i < bossLadies.length; i++) {
    // bossLadies[i] => i * Object { name: "First Last" }
    for (var scanLadiesOnDeck in bossLadies[i]) {
      // bossLadies[i] => First Last
      if (bossLadies[i]["name"] == inputAddEmp.value) {
        valMsg.innerText = inputAddEmp.value + " is already on the list!";
        return;
      }
    }
  }
  return false;
}

function verifiedAddition(){
    inputAddEmp.value = ""; // Clear the input field...
    valMsg.innerText = "Great success!"; // Load the validation message...
}

inputAddEmp.addEventListener('keyup', function(event){ // Enter key...
    if (event.keyCode == 13){
        btnAddEmp.click();
    }
})

btnAddEmp.addEventListener('click', addEmployee); // Add button...
