const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = 600
canvas.height = 600

let question = document.querySelector(".questions")
question.innerText = "Do you often answer surveys?";

 
let isQuestionOne = true;
let isQuestionTwo = false;
let isQuestionThree = false;
let isQuestionFour = false; 
let isQuestionFive = false;
let isQuestionSix = false;
let isQuestionSeven = false;
let isQuestionEight = false;
let isQuestionNine = false;

let presetTime =  1000;

let score = 0;
let scoreIncrement = 0;

function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineTo(600,400);
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function drawScore(){
    ctx.font = "20px Arial";
    ctx.fillStyle ="black";
    let scoreString = score.toString();    
    let xOffset = ((scoreString.length -1) * 20);
    ctx.fillText(scoreString, 85 - xOffset, 119);
}
 
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min + 1)) +min;
}

function randomNumberInterval(timeInterval){
    let returnTime = timeInterval;
    if(Math.random() < 4 ){
        returnTime += getRandomNumber(presetTime/6 , presetTime /6);
    }
    else{
        returnTime -= getRandomNumber(presetTime/6 , presetTime /6);
    }
    return returnTime; 
}

class Player{
    constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size
        this.color=color;

        this.jumpHeight = 6 ;
        this.shouldJump = false;
        this.jumpCounter = 0;
    }
    jump(){
        if(this.shouldJump){
            this.jumpCounter ++;
            if(this.jumpCounter <15){
                this.y -= this.jumpHeight;
            }
            else if(this.jumpCounter > 14 && this.jumpCounter <19){
                this.y += 0;
            }
            else if(this.jumpCounter < 33){
                this.y += this.jumpHeight;
            }
            if(this.jumpCounter >= 32){
                this.shouldJump = false;
            }
        }
    }
    draw(){
        this.jump();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
}
let player = new Player(280,350,50,"black");

class Options{
    constructor(size,speed,color){
        this.x =  50 -size;
        this.y = 290 -size;
        this.size = size;
        this.color= color;
        this.slideSpeed = speed;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    slide(){
        this.draw()
        this.x += this.slideSpeed;
    }
    slideBackward(){
        this.x -= this.slideSpeed;
    }
}

let optionOne = new Options (45,2,"red");
let optionTwo = new Options (45,2, "purple");
let optionThree = new Options (45,2, "green");

let arrayOptions = [];  

function generateOptions(){
    let timeDelay = randomNumberInterval(presetTime/2);
    let arrayOne =arrayOptions.push(new Options (45,2, "purple"));
    console.log(arrayOptions);

    setTimeout(generateOptions, timeDelay);
}

// Check if objects are colliding
function squareCollision(player,option){
    let s1 = Object.assign(Object.create(Object.getPrototypeOf(player)),player);
    let s2 = Object.assign(Object.create(Object.getPrototypeOf(option)),option);

    s2.size = s2.size -10;
    s2.x = s2.x+10;
    s2.y = s2.y+10;

    return !(
        s1.x>s2.x+s2.size||
        s1.x+s1.size<s2.x||
        s1.y>s2.y+s2.size||
        s1.y+s1.size<s2.y
    )
}
let animationId = null;

function animate(){ 
    animationId = requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // Draw line
    drawBackgroundLine();
    // Draw Score
    drawScore();
    // Draw Player
    player.draw(); 

 /*
    arrayOptions.forEach(function(option,index){
        option.slide();

        if(squareCollision(player,option)){ 
            if(isQuestionOne){
                isQuestionOne = false
            }
            if(isQuestionOne === false && eventCounter === 1){
                question.innerText ="Do you complete every survey that you start?";
                isQuestionTwo = true;
            }
            if(isQuestionTwo === true && eventCounter === 2){
                question.innerText = "Do you consider answering surveys as dull or un-engaging?";
                isQuestionThree = true;
            } 
            if(isQuestionThree === true && eventCounter === 3){
                isQuestionTwo = false;
                question.innerText = "Have you ever encountered the term gamification?";
                isQuestionFour = true;
            } 
            if(isQuestionFour === true && eventCounter === 4){
                isQuestionThree = false;
                question.innerText = "Have you ever filled out a gamified survey?";
                isQuestionFive = true;
            } 
            if(isQuestionFive  === true && eventCounter === 5){
                isQuestionFour = false;
                question.innerText = "Do you feel like you'd pay more attention to a gamified survey?";
                isQuestionSix = true;
            } 
            if(isQuestionSix === true && eventCounter === 6){
                isQuestionFive = false;
                question.innerText = "Does this gamified survey pressure you in a positive way?";
                isQuestionSeven = true;
            } 
            if(isQuestionSeven === true && eventCounter === 7){
                isQuestionSix = false;
                question.innerText = "Does it inspire you to complete the survey?";
                isQuestionEight = true;
            } 
            if(isQuestionEight === true && eventCounter === 8){
                isQuestionSeven = false;
                question.innerText = "Do you feel motivated to participate out of your own will?";
                isQuestionNine = true;
            }
            if(isQuestionNine === true && eventCounter === 9){
                isQuestionEight = false;
                isQuestionOne = true;
                cancelAnimationFrame(animationId);
            }
        }

        if((option.x + option.size) > canvas.width){
            setTimeout(() =>{
                arrayOptions.splice(0,1);
            },0)
        }
    })
*/
    for(let i=0; i< arrayOptions.length;i++){
        arrayOptions[i].slide();
        if((arrayOptions[i].x + arrayOptions[i].size) >1200){
            setTimeout(() =>{
                arrayOptions.unshift();
            },0)
        }
        if( i % 2 == 0){
            arrayOptions[2].color = "Red";
        }
        /*
        if(arrayOptions[2]){
            arrayOptions[2].color = "Red";
        } 
        if(arrayOptions[4]){
            arrayOptions[4].color = "Green"
        }
        if(arrayOptions[6]){
            arrayOptions[6].color = "Red"
        }*/
    }

}
animate();

setTimeout(()=>{
    generateOptions();
})   

let eventCounter = 0

document.addEventListener("keydown" , function(event){
    if(event.code == "Space"){
        eventCounter ++;
        if(!player.shouldJump){
            player.jumpCounter = 0;
            player.shouldJump = true;
        }
    }
})