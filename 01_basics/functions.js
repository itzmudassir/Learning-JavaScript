function addTwoNumbers(number1, number2){
    return number1 + number2;
}

// console.log(addTwoNumbers(4, 5))
// console.log(addTwoNumbers(4, "a"));

function userLoginMessage(username){
    if(!username){
        console.log("Error: Username is required. ");
    }
    else{
        console.log(`${username} just logged in...`);
    }
    
    
}

// userLoginMessage("Mudassir")
// userLoginMessage("")
// userLoginMessage()
userLoginMessage("Mudassir")

