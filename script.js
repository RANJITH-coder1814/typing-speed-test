const paragraph = document.getElementById("paragraph").innerText;
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const mistakesDisplay = document.getElementById("mistakes");
const wpmDisplay = document.getElementById("wpm");

let time = 60;
let mistakes = 0;
let timer;

input.addEventListener("input", startTest);

function startTest(){
if(!timer){
timer = setInterval(updateTime,1000);
}

const typedText = input.value;
mistakes = 0;

for(let i=0;i<typedText.length;i++){
if(typedText[i] !== paragraph[i]){
mistakes++;
}
}

mistakesDisplay.textContent = mistakes;

let words = typedText.trim().split(/\s+/).length;
let wpm = Math.round((words/timeElapsed())*60);

if(wpm < 0 || !wpm || wpm === Infinity){
wpm = 0;
}

wpmDisplay.textContent = wpm;
}

function updateTime(){
if(time > 0){
time--;
timeDisplay.textContent = time;
}else{
clearInterval(timer);
input.disabled = true;
}
}

function timeElapsed(){
return 60 - time;
}

function resetTest(){
location.reload();
}
