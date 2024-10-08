function answer(){
  const principal = parseFloat(document.getElementById("amount"));
const time =  parseFloat(document.getElementById("months"));
 
let rate;
let interest;
let totalPayment;
if (principal <= 5000){
  rate = 5;
}
else if(principal >500 || principal <= 10000){
  rate = 10;
}
else {
  rate =20;
}
 ((100*interest)/principal*time) = rate;
 ((100*interest)/principal*rate) = time;
 ((principal*time*rate)/100) = interest;
 (interest + principal) = totalPayment;
 monthlyPayment = totalPayment / time;
 document.getElementById("suminput").value = MonthlyPayment;
}
button.getElementById.value("click",answer);