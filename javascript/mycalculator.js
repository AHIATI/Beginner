const inputFieldE1 = document.getElementById("scoreboard");
const buttonsE1 = document.querySelectorAll("button");

for(let i = 0; i < buttonsE1.length; i++){
buttonsE1[i].addEventListener("click",()=>{
  const buttonValue = buttonsE1[i].textContent;
if(buttonValue==="C"){
  clearResult();
}
else if (buttonValue === "="){
 calculateResult();
}
else {appendValue(buttonValue);}
});
}
function clearResult(){
  inputFieldE1.value ="";
}
function calculateResult(){
  inputFieldE1.value = eval(inputFieldE1.value);
}
function appendValue(buttonValue){
  inputFieldE1.value += buttonValue;
}