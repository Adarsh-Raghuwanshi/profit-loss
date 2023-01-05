let divInput = document.querySelectorAll("input");
let btn = document.querySelector("button");
let output = document.querySelector("span");


function calculator(){
    let initialPrice = divInput[0].value;
    let quantity = divInput[1].value;
    let currentPrice = divInput[2].value;

    if(initialPrice == "" || quantity == "" || currentPrice == ""){
        alert("Pleaase fill all the fields!!");
        return;
    }else if(initialPrice < 0 || quantity < 0 || currentPrice < 0){
        alert("Pleaase enter valid numbers!!");
        return;
    }

    let initialAmount = quantity * initialPrice;
    let currentAmount = quantity * currentPrice;
    let finalAmount = currentAmount - initialAmount;
    let finalAmountPercantage = (finalAmount/initialAmount) * 100;

    if(finalAmount < 0){
        output.style.color = "red";
        output.innerHTML = `Oops!! You have incurred the loss of ${Math.abs(finalAmount)} and loss percentage is ${Math.abs(finalAmountPercantage)}%`;
    }else if(finalAmount == 0){
        output.style.color = "gray";
        output.innerHTML = "No pain no gain!!";
    }else{
        output.style.color = "black";
        output.innerHTML = `Yayy!! You have earned the profit of ${finalAmount} and profit percentage is ${finalAmountPercantage}%`;
    }
}

btn.addEventListener("click", calculator);