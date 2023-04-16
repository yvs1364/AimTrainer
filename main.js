let sizeOfScale; // global dot scale

// timer
function startTimer() {
  const startbtn = document.getElementById("start");
  const scaleBar = document.getElementById("myRange");
  let duration = 30;
  let timer = duration;
  let timerInterval = setInterval(function () {
    // Disable action on btn/scale
    startbtn.disabled = true;
    scaleBar.disabled = true;

    updateTime(timer);
    generateRandomDot();
      if (--timer < 0) {
        clearInterval(timerInterval);
        updateTime(duration); // reset l'affichage du timer
        resetScore()
        removeDot();
        // Enable action on btn/scale
        startbtn.disabled = false;
        scaleBar.disabled = false;
      }
  }, 1000);
}

function updateTime(time){
  var minutes, seconds;
  const display = document.getElementById("time");
  minutes = parseInt(time / 60, 10)
  seconds = parseInt(time % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = minutes + ":" + seconds;
}

// Dots
function generateRandomDot(){
  var stage = document.getElementById("stage");
  var stageWidth = stage.offsetWidth;
  var stageHeight = stage.offsetHeight

  createDot(stageWidth,stageHeight);
}

function createDot(x,y) {
  // create a new div element
  const stage = document.getElementById("stage");
  const dotIsPresent = document.getElementsByClassName("dot");
  if(dotIsPresent.length===1) {removeDot();}
  const dot = document.createElement("div");
  dot.classList.add("dot");

  dot.style.left = Math.floor(Math.random() * x)+'px';
  dot.style.top =  Math.floor(Math.random() * y)+'px';

  // Append to stage:
  stage.appendChild(dot);
  updateDotScale(1);
  dot.onclick = function() { removeDot(); score();};
}

function removeDot() {
  var dot = document.getElementsByClassName("dot");
  dot[0].remove();
}

function onChangeDotScale(){
  const sliderElem = document.getElementById("myRange");
  sizeOfScale = Number(sliderElem.value);
  updateDotScale(0);
}

function updateDotScale(option){
  console.log(sizeOfScale);
  var dot1 = document.getElementsByClassName("dot1");
  dot1[0].style.transform = "scale("+sizeOfScale+")";
  if(option==1){
    var dot = document.getElementsByClassName("dot");
    dot[0].style.transform = "scale("+sizeOfScale+")";
  }

}

// Score
function score(){
  const score = document.getElementById("score");
  let value = score.textContent;
  score.textContent = Number(value) + 10;
}

function resetScore(){
  const score = document.getElementById("score");
  // let value = score.textContent;
  score.textContent = 0;
}