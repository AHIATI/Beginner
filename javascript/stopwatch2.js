const heading1 = document.getElementById("heading");
const start1 = document.getElementById("start");
const stop1 = document.getElementById("stop");
const reset1 = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
  startTime = Date.now()-elapsedTime;
  timerInterval = setInterval(() =>{
  elapsedTime = Date.now()-startTime;
  heading1.textContent = formatTime(elapsedTime);
  },10);

start1.disabled = true;
stop1.disabled = false;
}
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
function stopTimer(){
  clearInterval(timerInterval);
  start1.disabled = false;
  stop1.disabled = true;

}
function resetTimer(){
  clearInterval(timerInterval);
  elapsedTime = 0;
  heading1.textContent = "00:00:00";

  start1.disabled = false;
  stop1.disabled = true;
}
start1.addEventListener("click", startTimer);
stop1.addEventListener("click", stopTimer);
reset1.addEventListener("click", resetTimer);