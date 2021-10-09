let character = document.getElementById("character");
let block = document.getElementById("block");


document.addEventListener('keydown' , function(event){
    if(event.code == "Space"){
     block.classList.add("animate");

     console.log("You hit me")
    }
})
document.addEventListener("keyup", function(event){
    if(event.code == "Space"){
        setTimeout(function(){
            block.classList.remove("animate");
        })
    }    
})

document.addEventListener("click", function(event){
    console.log(`xAxis: ${event.offsetX} yAxis ${event.offsetY}`)
})

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 920
canvas.height = 600

