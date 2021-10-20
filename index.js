/*
let person = {
    name: "Xolani",
    age: 25
};

// "This" is the current object because i have assigned 
//  person to the arrow function.

person.sayHello = function (){
    console.log(this.name);
};

person.sayHello();

function userObj(name, surname){
    this.name = name;
    this.surname = surname;
    this.isAdmin = false;
}
let user = new userObj("Thandazile", "Gcisa");

console.log(user);
*/


class User{
    constructor(name , surname){
        this.name = name; 
        this.surname = surname;
    }

    sayHello(){
        console.log(user.name, user.surname);
    }
}

let user = new User("Xolani", "Maya");
user.sayHello();


let newArray = ["1","2","3","4","5"];
newArray.push(new Array("10","15"));

console.log(newArray);


function generateRandomInteger(min,max){
    
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
 let rndm = generateRandomInteger(2,10);

 console.log(rndm);

