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

/*
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
*/

/*
function generateRandomInteger(min,max){
    
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
 let rndm = generateRandomInteger(2,10);

 console.log(rndm);
*/

// Boolean Statements:

let isGameOver = false;

if(!isGameOver){
    console.log("Still in Play")
}else{
    console.log("Game Over")
}

// If statements:


/*
let gender = "Hello";

if(gender == "M"){
    console.log("Male");
}else if (gender == "F"){
    console.log("Female");
}
else{
    console.log("Hai");
}


switch(gender){
    case "F": 
        console.log(`Case: Female`)
        break;
    case "M" : 
         console.log("Case: Male")
         break;
    default:
        console.log("unknown")
}
*/
// Loops // 

for(let i = 0; i<newArray.length; i++){
    console.log(newArray[4]);
}

for(let values of newArray){
    console.log(values);
}

newArray.forEach(function(props){
    console.log(props);
})

function player(name, surname,dob, idk){
    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.idk = idk;
}
let set = new player("Ntomi","Gani","1980");

let set_Two = new player("me", "qwerty","1998");
console.log(set)

set_Two.FindValue = function (){
    console.log(this.name);
}
set_Two.FindValue();




/*
// Canvas setup 

const canvas = document.getElementById("canvas-One")
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let score = 0 ;
let gameFrame = 0;
ctx.font = "50px Georgia"

// Mouse Interactivity

let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener("mousedown", function(event){
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
    mouse.click = true;
    console.log(event);
})

canvas.addEventListener("mouseup", function(){
    mouse.click = false;
})

// Player

class Player{
    constructor(){
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 327;
    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        if(mouse.x != this.x){
            this.x -= dx/30;
        }
        if(mouse.y != this.y){
            this.y -=dy/30
        }
    } 
    draw(){
        if(mouse.click){
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(this.x,this.y,this.radius,10);
    }
}

// Bubbles 

const enemyArray = [];
class Enemy{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * canvas.height;
        this.radius = 5;
        this.speed = Math.random() * 5 +1;
        this.distance;
    }
    update(){
        this.y -= this.speed
    }
    draw(){
        ctx.fillStyle ="blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

const enemy = new Enemy();

function handleBubbles(){
    if(gameFrame % 50 == 0){
        enemyArray.push(new Enemy())
    }
    enemyArray.forEach(function(element){
        element.update();
        element.draw();

        if(enemyArray.y <0){
            enemyArray.splice(element,1)
        }
    })
}

const player = new Player();

// Animation Loop

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    player.draw();
    enemy.update();
    enemy.draw();
    handleBubbles();
    requestAnimationFrame(animate);
}
animate();
*/