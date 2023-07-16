let b = 3330
//let c=21
let a = 3032320
if (true) {
    let a = 13320
    const b = 23230
    //console.log("INNER: a", a);
   // console.log("Inner: b", b);    
}

//console.log("Outer a",a);
//console.log("Outer b",b);
//console.log(c);

//-------------Nested--------------------\\

function one() {
    const username="Aashish"

    function two() {
        const password="password"
        console.log(username);
        }    
   // console.log(password);
    two()    
}
//one()

if(true){
    const username="aashish11"
    if(username==='aashish11'){
        const password=' 12121212'
        console.log(username+"Password" + password );
    }
    //console.log(password);
}
//console.log(username);

//++++++++++++Intersting++++++++++++++++++//

console.log(addone(533))

function addone(num){
    return num + 1233
}

addTwo(5)
const addTwo = function(num){
    return num + 232
}