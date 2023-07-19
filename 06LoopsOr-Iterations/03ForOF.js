//for of loops


const arr=[1,2,3,4,5,6,7,88,2122]
 for (const iterator of arr) {
    //console.log(iterator);
 }

 const greetings="Jai Sri Ram"
 for (const iterator of greetings) {
   // console.log(iterator);
 }

 //Maps

 // Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } 
// Object is not iterable in for of loops

