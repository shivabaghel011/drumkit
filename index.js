
// DETECTING BUTTON PRESS using anonymous function:-

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

// document.querySelectorAll(".drum")[i].addEventListener("click", function () {
// var buttonInnerHTML = this.innerHTML;                

// // sWITCH STATEMENT TO MAKE SOUND:-
// switch (buttonInnerHTML) {
//   case "w":                                          //  new Audio("sounds/tom-1.mp3").play()});
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//     break;
//   case "a":
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//     break;
//   case "s":
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//     break;
//   case "d":
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//     break;
//   case "j":
//     var snare = new Audio("sounds/snare.mp3");
//     snare.play();
//     break;
//   case "k":
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//     break;
//   case "l":
//     var kick = new Audio("sounds/kick-bass.mp3");
//     kick.play();
//     break;

//     default: console.log(buttonInnerHTML);
// }
  
 
// buttonAnimation(buttonInnerHTML);


// });
// }




// OR DETECTING BUTTON PRESS USING NAMED FUNCTION:-

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", handleButtonClick);
function handleButtonClick() {
  var buttonInnerHTML = this.innerHTML;
  makesound(buttonInnerHTML);

  // to call button animation function
  buttonAnimation(buttonInnerHTML);
}
}


// FUNCTION TO MAKE SOUND:- 
function makesound(key){
switch (key) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");        //  new Audio("sounds/tom-1.mp3").play()});
    tom1.play();
    break;
  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default: console.log(buttonInnerHTML);
}

}









// OR DETECTING KEYBOARD PRESS USING higher order FUNCTION:-  i.e calling a function inside another function

document.addEventListener("keypress", function(event){
  makesound(event.key);
  buttonAnimation(event.key);


});

// FUNCTION TO MAKE SOUND:-
function makesound(keyPressed){
  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      default: console.log(keyPressed);
  }
}



function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}





// or DETECTING KEYBOARD PRESS USING NAMED FUNCTION:-

// document.addEventListener("keypress", handleKeyPress);
// function handleKeyPress(event){
//   makesound(event.key);
// }


// // FUNCTION TO MAKE SOUND:-

// function makesound(keyPressed){
//   switch (keyPressed) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//       default: console.log(keyPressed);
//   }
// }


 













