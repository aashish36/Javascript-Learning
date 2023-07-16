//ram

function sayMyName(){
    console.log("   A   ");
    console.log("   A   ");
    console.log("   S   ");
    console.log("   H   ");
    console.log("   U   ")
}
//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 // the code written after the return method will not be run
}

const result = addTwoNumbers(333, 52334)

//console.log("Result: ", result);

function userLoginStatus(Username="Jai Shree Ram"){
    if (!Username) {
        console.log("Please Enter the valid username---->");
        return
    }
    return `${Username} just logged in the account`
}
//console.log(userLoginStatus("Aashish"))

//console.log(userLoginStatus())

//----------------------------------------------//

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "AAshish12",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200233, 4032450, 5034340, 1000]));