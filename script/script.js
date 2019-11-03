const rocket = document.querySelector(".rocket")
const star = document.querySelectorAll(".star")
const soundButton=document.querySelector("#soundButton")
const interstellarMusic=document.querySelector("#interstellarMusic")
const audioOff=document.querySelector(".audioOff")
const reactorFire = document.querySelectorAll(".reactorFire")
const rocketContainer=document.querySelector(".rocketContainer")

rocket.addEventListener(
  "mouseover",
  ()=>{
    rocketContainer.classList.add("rocketShake")
    for(let i=0; i<star.length; i++){
      star[i].style.width="200px"
      star[i].style.transition="all 2s"
      star[i].style.animationDuration="2s"
    }
    for(let j=0; j<reactorFire.length; j++){
      reactorFire[j].classList.remove("fireMoving")
      reactorFire[j].classList.add("fireMovingSpeed")
    }
  }
)
rocket.addEventListener(
  "mouseout",
  ()=>{
    rocketContainer.classList.remove("rocketShake")
    for(let i=0; i<star.length; i++){
      star[i].style.width="3px"
      star[i].style.transition="all 2s"
      star[i].style.animationDuration="4s"
    }
    for(let j=0; j<reactorFire.length; j++){
      reactorFire[j].classList.add("fireMoving")
      reactorFire[j].classList.remove("fireMovingSpeed")
    }
  }
)

/* SOUND */

let musicPlaying=false

soundButton.addEventListener(
  "click",
  ()=>{
    if(musicPlaying==false){
      interstellarMusic.play()
      musicPlaying=true
      audioOff.style.display="none"
    }
    else{
      interstellarMusic.pause()
      musicPlaying=false
      audioOff.style.display="block"
    }
  }
)
