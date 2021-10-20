const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let presetTime =   1500;

function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineTo(600,400);
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = "black";
    ctx.stroke();

}
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min + 1)) +min;
}
function randomNumberInterval(timeInterval){
    let returnTime = timeInterval;
    if(Math.random() < 1.5){
        returnTime += getRandomNumber(presetTime / 3, presetTime * 1.5);
    }
    else{
        returnTime -= getRandomNumber(presetTime /5, presetTime /2);
    }
    return returnTime; 
}
class Player{
    constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size
        this.color=color;

        this.jumpHeight = 12;
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
let player = new Player(150,350,50,"black");



class Options{
    constructor(size,speed){
        this.x = 450  +size;
        this.y = 290 -size;
        this.size = size;
        this.color= "purple";
        this.slideSpeed = speed;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    slide(){
        this.draw()
        this.x -= this.slideSpeed;
    }
}
let arrayOptions = [];   

function generateOptions(){
    let timeDelay = randomNumberInterval(presetTime);
    arrayOptions.push(new Options (45,1));

    setTimeout(generateOptions,timeDelay);
}
 
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
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBackgroundLine();
    player.draw();
    

    arrayOptions.forEach(function(option,index){
        option.slide();

        if(squareCollision(player,arrayOptions)){
            cancelAnimationFrame(animationId)
            console.log("you hit me");
        }

        if((arrayOptions.x + arrayOptions.size) <= 0){
            setTimeout(() =>{
                arrayOptions.splice(index,1);
            },0)
        } 
    })
}
animate();
setTimeout(()=>{
    generateOptions();
},randomNumberInterval(presetTime))

document.addEventListener("keydown" , function(event){
    if(event.code == "Space"){
        if(!player.shouldJump){
            player.jumpCounter = 0;
            player.shouldJump = true;
        }
    }
})