//for loop

// for (let index = 0; index <100; index++) {
//     const element = index;
//     if (index%2==0) {
//         console.log(`${element} is even`);
//     }else{
//         console.log(`${element} is odd`);
//     }    
// }

//Nested For loop

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop Value ${i}`);
    //console.log('Table'+i);
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner loop Value ${j} and outer Loop value ${i}`);
       // console.log(i+"*"+j+"="+i*j);
    }
}

//ArrAY LOOP
let myGods=["ram","shiva","bramha","sakthi"]
//console.log(myGods.length);
for (let index = 0; index < myGods.length; index++) {
    const element = myGods[index];
   // console.log(element);
    
}


//break and continue

for (let index = 0; index <100; index++) {
    if (index%2==0) {
        console.log("detect the even number"+index);
        continue;

    }else if(index==13){
        break;
        console.log(index);
    }
    else{
        console.log(index);
    }
}