//getting inputs for backend
const timer1 = document.getElementById("timer");
const start1 = document.getElementById("start");
const stop1 = document.getElementById("stop");
const reset1 = document.getElementById("reset");

let interval;
let timeLeft = 1500;

//declaring minutes,seconds,formattedTime 
function updateTimer(){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
  timer1.innerHTML = formattedTime ; 
}

//function to run when user click starter times
function starterTime(){
  interval = setInterval(() => {
  timeLeft--;
  updateTimer();
 if (timeLeft===0){
  clearInterval(interval);
  alert("Time is Up buddy!");
  timeLeft = 1500;
  updateTimer();
 }
 },1000);
}
 function stopTimer(){
  clearInterval(interval);
}
function resetTimer(){
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}
start1.addEventListener("click",starterTime);
reset1.addEventListener("click",resetTimer);
stop1.addEventListener("click",stopTimer);  


