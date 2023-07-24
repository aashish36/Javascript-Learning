const programming=["js","py","rb","go","java","c++","c"]

// programming.forEach(function (item) {
//     console.log(item);
// })

// programming.forEach((item)=>{
//    console.log(item);
// })

function printme(item) {
    console.log(item);
}
//programming.forEach(printme)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
} )