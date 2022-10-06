// document.querySelectorAll(".hello").addEventListener("click",handleClick);
var h= document.querySelectorAll(".drum");
for (var i = 0; i < h.length; i++) {
    h[i].addEventListener("click",handleClick);
}
function handleClick(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play(); 
    // this.style.backgroundColor="red";
    var a=this.innerHTML;
    // console.log(a);
    switch(a){
                    case "w":   var audio = new Audio("sounds/tom-1.mp3");
                    audio.play(); 
                    break;
                    case "a":   var audio = new Audio("sounds/tom-2.mp3");
                    audio.play(); 
                    break;   
                    case "s":   var audio = new Audio("sounds/tom-3.mp3");
                    audio.play(); 
                    break;                 
                    case "d":   var audio = new Audio("sounds/tom-4.mp3");
                    audio.play(); 
                    break;
                    case "j":   var audio = new Audio("sounds/snare.mp3");
                    audio.play(); 
                    break;
                    case "k":   var audio = new Audio("sounds/crash.mp3");
                    audio.play(); 
                    break;
                    case "l":   var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play(); 
                    break;
    }
    
}
document.addEventListener("keypress",keycheck);
function keycheck(){
    var lettercheck=event.key;
    switch(lettercheck){
        case "w":   var audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
        break;
        case "a":   var audio = new Audio("sounds/tom-2.mp3");
        audio.play(); 
        break;   
        case "s":   var audio = new Audio("sounds/tom-3.mp3");
        audio.play(); 
        break;                 
        case "d":   var audio = new Audio("sounds/tom-4.mp3");
        audio.play(); 
        break;
        case "j":   var audio = new Audio("sounds/snare.mp3");
        audio.play(); 
        break;
        case "k":   var audio = new Audio("sounds/crash.mp3");
        audio.play(); 
        break;
        case "l":   var audio = new Audio("sounds/kick-bass.mp3");
        audio.play(); 
        break;
}
}