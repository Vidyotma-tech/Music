//detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;

    performSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detecting key press
document.addEventListener("keypress", function(event){
  performSound(event.key);
  buttonAnimation(event.key);
});

function performSound(key){
  switch(key){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "j":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default:
  }
}


//detecting song button pressed

// var numberOfSongs = document.querySelectorAll(".songLink").length;
// for(var i=0; i<numberOfSongs; i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     var number = this.innerHTML;
//     number = number.charAt(0);
//     playSongs(number);
//   });
// }


//detecting song key press
document.addEventListener("keypress",function(event){
  playSongs(event.key);
});

var chithi = new Audio("songs/chithi Na Koi Sandesh.mp3");
var kashti = new Audio("songs/Kagaz Ki Kashti.mp3");
var count = new Audio("songs/Count On Me.mp3");
var wish = new Audio("songs/My Wish.mp3");
var currentSong = false;
function playSongs(num){
  if(currentSong!=false){
    currentSong.pause();
  }
  switch(num){
    case "1":
      currentSong = chithi;
    break;

    case "2":
      currentSong = kashti;
    break;

    case "3":
      currentSong = count;
    break;

    case "4":
      currentSong = wish;
    break;
  }
  currentSong.play();
}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+ currentKey);

  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);
}
