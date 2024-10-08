function loanCalculator(){
 principal = document.getElementById("amount").value;
 years = document.getElementById("months").value;
  let rate; 
  let interest;
  let totalPayment;
   if (principal <= 5000){
  rate = 5;
}
else if(principal >500 && principal <= 10000){
  rate = 10;
}
else {
  rate =20;
}

document.getElementById("rate").value = rate;

  interest = (principal*years*rate)/100 ;
 totalPayment = parseFloat(interest) + parseFloat(principal);
 let months = years * 12;
 let monthlyPayment = totalPayment / months;
 document.getElementById("monthlypayment").innerHTML = `Monthly Payment: $ ${ monthlyPayment.toFixed(2)}`;
}