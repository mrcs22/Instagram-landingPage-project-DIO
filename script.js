let phoneScreenDiv = null;
let phoneScreenImage = null;

let phoneBackScreenDiv = null;
let phoneBackScreenImage = null;

let upImageCounter = 1;
let backImageCounter = 3;

let currentPic = null;
let backPic = null;

let clock = 1;



window.addEventListener("load", ()=>{
  phoneScreenImage = document.getElementById("phone-screen-image");
  phoneScreenDiv = document.getElementById("phone-screen");

  phoneBackScreenImage = document.getElementById("phone-back-screen-image");
  phoneBackScreenDiv = document.getElementById("phone-back-screen");

  setInterval(()=>{

    if(clock%2 !== 0){
      fadeOut(phoneScreenDiv);
      showUp(phoneBackScreenDiv);

      updateCurrentPic()
      console.log(backImageCounter)
    }
    else
    {
      fadeOut(phoneBackScreenDiv);
      showUp(phoneScreenDiv);
  
      upadateBackPic()
      console.log(upImageCounter)
    }
    
    clock++;

  }, 5000);

});


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
  
  setTimeout(()=> element.style.opacity = "0.2", 200 );
  setTimeout(()=> element.style.opacity = "0.4", 400 );
  setTimeout(()=> element.style.opacity = "0.6", 600 );
  setTimeout(()=> element.style.opacity = "0.8", 700 );
  setTimeout(()=> element.style.opacity = "1", 1000 );

  }

function fadeOut(element){
  setTimeout(()=> element.style.opacity = "0.8", 200 );
  setTimeout(()=> element.style.opacity = "0.6", 400 );
  setTimeout(()=> element.style.opacity = "0.4", 600 );
  setTimeout(()=> element.style.opacity = "0.2", 700 );
  setTimeout(()=> element.style.opacity = "0", 1000 );
}

