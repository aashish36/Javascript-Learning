//object

const myobject={
    py:"python",
    cpp:"c++",
    rb:"ruby",
    go:"go",
    c:"c"
}
for (const key in myobject) {
   //console.log(key);
  // console.log(key+':-'+myobject[key]);
}

//Array

const programming=["js","py","rb","go","java","c++","c"]

for (const key in programming) {
   //console.log(key);
  // console.log(key+':-'+programming[key]);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

for (const key in map) {
   console.log(key);
}