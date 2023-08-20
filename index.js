var billAmount = document.querySelector("#bill");
var cashGiven = document.querySelector("#cash");
var btnCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector("#error");

function validation(){
    errorMessage.style.display = "none";
    if(billAmount.value >= 0){

    }
    else
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Invalid amount veere";
    

}


btnCheck.addEventListener("click", validation);