let phoneScreenDiv = null;
let phoneScreenImage = null;

let phoneBackScreenDiv = null;
let phoneBackScreenImage = null;

let upImageCounter = 1;
let backImageCounter = 3;

let currentPic = null;
let backPic = null;

window.addEventListener("load", ()=>{
  let clock = 1;
  phoneScreenImage = document.getElementById("phone-screen-image");
  phoneScreenDiv = document.getElementById("phone-screen");

  phoneBackScreenImage = document.getElementById("phone-back-screen-image");
  phoneBackScreenDiv = document.getElementById("phone-back-screen");

  setInterval(()=>{
    renderPhoneScreenAnimation(clock);        
    clock++;
  }, 5000);

});

function renderPhoneScreenAnimation(clock){
  if(clock%2 !== 0){
    fadeOut(phoneScreenDiv);
    showUp(phoneBackScreenDiv);

    updateCurrentPic()
  }
  else
  {
    fadeOut(phoneBackScreenDiv);
    showUp(phoneScreenDiv);

    upadateBackPic()
  }
}

function updateCurrentPic(){
  if(upImageCounter < 5){
    upImageCounter++;
  }
  else{
    upImageCounter = 1;
  }

  currentPic = `./images/phone-image-${upImageCounter}.jpg`;
  
  setTimeout(() => {
    phoneScreenImage.setAttribute("src", currentPic);
  }, 1010);
}

function upadateBackPic(){
  if(backImageCounter < 5){
    backImageCounter++;
  }
  else{
    backImageCounter = 1;
  }

  backPic = `./images/phone-image-${backImageCounter}.jpg`;

  setTimeout(() => {
    phoneBackScreenImage.setAttribute("src", backPic);
  }, 1010);
}

function showUp(element){
  let opacity = 0;
  let interval = setInterval(()=>{
    opacity+=10;
    element.style.opacity = opacity/100;
    killInterval(interval, opacity, 100);
  }, 100);
  }

function killInterval(interval, opacity, ending){
    if(opacity === ending){
      clearInterval(interval);
    }
}

function fadeOut(element){
  let opacity = 100;
  let interval = setInterval(()=>{
      opacity-= 10;
      element.style.opacity = opacity/100;
     
      killInterval(interval, opacity, 0);   
      
    }, 100);
}

