const billAmount = document.querySelector('#bill');
const cashGiven = document.querySelector('#cash');
const btnCheck = document.querySelector('#btn-check');
const errorMessage = document.querySelector('#error');
const noOfNotes = document.querySelectorAll("#no-of-notes");
const notesArray = [2000, 500, 100, 20, 10, 5, 1];


function validation() {
    hideMessage();


    const billAmountValue = parseFloat(billAmount.value);
    const cashGivenValue = parseFloat(cashGiven.value);

    if (billAmountValue > 0) {
        if (cashGivenValue >= billAmountValue) {
            const returnAmount = cashGivenValue - billAmountValue;
            calculateChange(returnAmount);
        }
        else {
            message("Do you wanna wash plates?");
        }
    }
    else {
        message("Invalid amount entered");
    }

}

function calculateChange(returnAmount) {

    for (let i = 0; i < notesArray.length; i++) {
        const currentChange = Math.trunc(returnAmount / notesArray[i]);
        returnAmount %= notesArray[i];
        noOfNotes[i].innerText = currentChange;

    }

}

function hideMessage() {

    errorMessage.style.display = "none";
}

function message(msg) {

    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

btnCheck.addEventListener('click', validation);