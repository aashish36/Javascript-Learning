//.....Arrow....
const user = {
    username: "Bande",
    price: 923323299,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "aashish"
//user.welcomeMessage()

//console.log(this);

//function learnToThis(){
//    const username='sairam'
//    console.log(this.username);
//}

//learnToThis() 
//**here we can not access this in side the function but can access in the variable

// const learnToThis=function () {
//     const username='sairam'
//     console.log(this.username);
// }
// learnToThis()

const learnToThis= () => {
    const username='sairam'
    console.log(this.username);
}
learnToThis()

// Arrow function Syntax()

//explicit

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }  

//implicit

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()