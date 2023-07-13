//SingleTon
//objects.create

//Objects Literals
const mySym = Symbol("JAISHREERAM") //Symbol creation


const myObject = {
    name:"aashish",
    age:21,
    email:"aashish@aashish.com",
    loginStatus:true,
    loginDays:["Mon","Sun","Sat"],
    [mySym]:"JAISHREERAM"
}

//console.log(myObject);
//console.log(myObject.email);
//console.log(myObject["email"]); // Use as Default method to call the key in a object
//console.log(myObject[mySym]);
//console.log(typeof myObject[mySym]);

myObject.email = "aashish@github.com"
console.log(myObject)
//Object.freeze(myObject)
myObject.email = "aashish@thyview.com"

myObject.greeting = function () {
    console.log("Jai Sri Ram");    
}
myObject.greetingTwo = function () {
    console.log(`Jai Sri Ram .. ${this.name} bhai`);    
}
console.log(myObject.greeting());
console.log(myObject.greetingTwo());
