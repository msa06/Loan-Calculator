//Listen for Submit
document.querySelector('#loan-form').addEventListener('submit',function(e){
   //Hide Results
   document.getElementById('result').style.display = 'none';
   
   //Show Loader
   document.getElementById('loading').style.display ='block';
   setTimeout(calculateResult,2000);
   
   e.preventDefault();
});

//calculate result
function calculateResult(){
   
   
   //UI Vars
   const amount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const years = document.getElementById('years');
   const monthlyPayment = document.getElementById('monthly-payment');
   const totalPayment = document.getElementById('total-payment');
   const totalInterest = document.getElementById('total-interest');
   
   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value)/100/12;
   const calculatedPayment = parseFloat(years.value)*12;
   
   //Calculated Monthly Payment
   const x = Math.pow(1+calculatedInterest,calculatedPayment);
   const monthly = (principal*x*calculatedInterest)/(x-1);
   if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);   
      totalPayment.value = (monthly*calculatedPayment).toFixed(2);
      totalInterest.value = (( monthly* calculatedPayment) - principal).toFixed(2);
      
       //Show Results
   document.getElementById('result').style.display = 'block';
   
      //Hide Loader
      document.getElementById('loading').style.display ='none';
      
   }else{
         
      //Create element
      showError('Please Check Your Number');
   }
   
   
}

//Show Error
function showError(errormsg){
   //Hide Results
   document.getElementById('result').style.display = 'none';
   
   //Hide Loader
   document.getElementById('loading').style.display ='none';
   
   
   //create a div
   const errorDiv = document.createElement('div');
   //get Element
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');
   
   
   //Add Class
   errorDiv.className = 'alert alert-danger';
   //append the textNode
   errorDiv.appendChild(document.createTextNode(errormsg));
   
   //Insert error above Heading
   card.insertBefore(errorDiv,heading);
   
   //Clear Error after 3 Second
   setTimeout(clearError,3000);
}

function clearError(){
   document.querySelector('.alert').remove();}




