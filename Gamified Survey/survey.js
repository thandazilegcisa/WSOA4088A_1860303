let character = document.getElementById("character")
let optionOne = document.getElementById("option-One")
let optionTwo = document.getElementById("option-Two")
let optionThree = document.getElementById("option-Three")

document.addEventListener('keydown' , function(event){
    if(event.code == "Space"){
     character.classList.add("animate");

    }
})
document.addEventListener("keyup", function(event){
    if(event.code == "Space"){
        setTimeout(function(){
            character .classList.remove("animate");
        })
    }    
})


/*
let collsionCheck = setInterval(function(){
    var characterTop = window.getComputedStyle(character).getPropertyValue("top")
    var optionOneBottom = window.getComputedStyle(optionOne).getPropertyValue("bottom");
    var optionTwoBottom = window.getComputedStyle(optionTwo).getPropertyValue("bottom");
    var optionThreeBottom = window.getComputedStyle(optionThree).getPropertyValue("bottom");

    if(optionOneBottom === 144){
        console.log("Hello");
        alert("Hit");
    }
    if(optionTwoBottom == characterTop){
        console.log("Hello");
        alert("Hit");
    }
    if(optionThreeBottom == characterTop){
        console.log("Hello");
        alert("Hit");
    }
},10); 

 
document.addEventListener("click", function(event){
    console.log(`xAxis: ${event.offsetX} yAxis ${event.offsetY}`)   
})
*/
