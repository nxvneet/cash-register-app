var billAmount = document.querySelector("#bill");
var cashGiven = document.querySelector("#cash");
var btnCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector("#error");

function validation(){
    
    if(billAmount.value >= 0){

    }
    else
        errorMessage.innerHTML = "Invalid amount veere";
    

}


btnCheck.addEventListener("click", validation);