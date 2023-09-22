"use strict";

/*Author: Thi My Linh Le
Date: 9/20/2023
Description: Assignment1 
Program 2- Weekly Loan Calculator
Develop a short term loan calculator program as a console application with the following specifications. Begin by designing your solution to this problem in pseudocode, which will be submitted along with the program.
If A dollars are borrowed at r% interest compounded weekly to purchase something with weekly payments for n years, then the weekly payment is given by the formula:
i  = 	     r     
  5200	
If:


Then calculate the weekly payment as:
weekly payment  = 	          i          
1 – (1 + i)-52n	* A

Write a console application that calculates the weekly payment after the user gives the amount of the loan, interest rate, and number of years.


*/

// DO NOT EDIT: The main function to house our program code 
let readlineSync = require('readline-sync');
function main()
{
  /* 1. program start*/
    //input
    /*2. Display "Weekly Loan Calculator"
    3. Promt an ask the user to input the loan amount and assign it to a variable name
    4. Promt an ask the user to input interest rate and assign it to a variable name
    5. Prompt an ask the user to input number of the year and assign it to a variable name

    */
    console.log("===Weekly Loan Calculator===");
    let loanamount = parseFloat(readlineSync.question("Enter the amount of loan:"));
    let interestrate = parseFloat(readlineSync.question("Enter the interest rate(%):"));
    let numberofyear = parseInt(readlineSync.question("Enter the number of years:"));
    
    //processing
    /*6. calculate the interest rate for one year by letiing the interest rate divided by 5200 and assign it to a variable "rateone year"
    7. calculate the weekly payment by following the fomular and assign it to a variable "Weekly payment"
    */
    //Calculate the weekly payment
    let rateoneyear = interestrate/5200;
    let weeklypayment = (rateoneyear/(1- ((1 + rateoneyear))**(-52*numberofyear)))*loanamount;
    

    //Output
    /*8. Display the title "Purchase summary" with the customer's name
    Display Your weekly payments
    Program ends.*/
    // your weekly payment will be
    console.log(" Your weekly payment will be:" + "$" + weeklypayment.toFixed(2));
    

    
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

