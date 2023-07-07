//console.log("jai shree ram");
const god="Shree Ram";
const myName="Aashish"
const myAge=21;
console.log(`My Name is ${myName}. I age is ${myAge}. I love Prabus ${god}`)

const newName=new String("Balaya-Hulk");
console.log(newName.length);
console.log(newName.charAt(2));
console.log(newName.indexOf("a"));
console.log(newName.substring(0,5));
console.log(newName.slice(0,6));

const newName1="    jai    shree   ram  ";
console.log(newName1);
console.log(newName1.trim());

const newUrl="https://aashish%20bande.in/projects"
console.log(newUrl.replace("%20","-"));
console.log(newUrl.split("/"));
console.log(newUrl.toLocaleLowerCase());
console.log(newUrl.toLocaleUpperCase());
console.log(newUrl.match("://"));
