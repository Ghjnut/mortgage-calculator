window.onload = function(){ 
  document.getElementById("calculate").onclick = function() { calculateMonthlyPayment() };
};

function calculateMonthlyPayment() {
  LoanAmount = parseInt(document.getElementById("loan-amount").value);
  InterestRate = parseInt(document.getElementById("interest-rate").value)/100/12; // 5%
  LoanTerm = parseInt(document.getElementById("loan-term").value) * 12; // 30 years

  total = (InterestRate * Math.pow(1 + InterestRate, LoanTerm))/(Math.pow(1+InterestRate, LoanTerm) - 1) * LoanAmount;

  document.getElementById("calculate-mortgage").innerHTML = "$" + total.toFixed(2);
}
