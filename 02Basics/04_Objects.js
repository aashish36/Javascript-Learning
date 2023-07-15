//jai Shree Ram
const userLogin = new Object()
userLogin.id="122aashu"
userLogin.name="aashu"
userLogin.IsLogin=false
//console.log(userLogin);

const RegularUser ={
    user1:{
        email:"aashish@github.com",
        fullname:{
            lastname:"aashish",
            firstname:"ram"
        }
    }
}
//console.log(RegularUser);
//console.log(RegularUser.user1.email);

const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'a',5:'b',6:'c'}
const obj3={7:'a',8:'b',9:'c'}
//const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);

const obj=[
    {
        id:"2132",
        email:"123@gmail.com"
    },
    {
        id:"2132",
        email:"123@gmail.com"
    },
    {
        id:"2132",
        email:"123@gmail.com"
    },,{
        id:"2132",
        email:"123@gmail.com"
    },
]
//console.log(obj[1].id);
console.log(userLogin)
console.log(Object.values(userLogin));
console.log(Object.keys(userLogin));
console.log(Object.entries(userLogin));
console.log(userLogin.hasOwnProperty("JaI shree Ram"));