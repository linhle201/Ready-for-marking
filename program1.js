"use strict";
/*Author: Thi My Linh Le
Date: 9/20/2023
Description: Assignment1 
Program 1 - Hipster's Local Vinyl Records.
Hipster’s Local Vinyl Records sell and hand-deliver vinyl records to their customers. Delivery is charged at a rate of $15 per kilometer. 
All purchases are subject to a 14% sales tax. 

*/

// DO NOT EDIT: The main function to house our program code 
let readlineSync = require('readline-sync');
function main()
{
     /* 1. program start*/
    //input
     /*2. Display the title for this program
    "Hipster's Local Vinyl Records- Customer Order Details"
    3. Get the customers name and assign it to a variable name
    4. Promt an ask the user to input the distance in km for delivery and assign it to a variable name
    5. Prompt an ask the user to input the cost of the records purchased and assign it to a variable name
    */
    console.log("=== Hipster's local Vinyl Records- Customer Order Details===");
    let nameCustomer = readlineSync.question("Enter the customer's name:");
    let distance = parseFloat(readlineSync.question("Enter the distance in kilometers for delivery:"));
    let recordspurchase = parseFloat(readlineSync.question("Enter the cost of the cost of records purchased:"));

    //processing
    /*6. calculate the deliverycost by multiplying the "distance" with 15 and assign it to a variable "deliverycost"
    7. calculate the purchase cost with tax by multiplying the "purchasedcost" by 1.14 and assign it to a variable 
    8. calculate the total amount by adding the "delivery" with "the purchasecost" and assign it to the variable "totalcost"
    */
    let deliverycost = distance*15;
    let purchasecost = recordspurchase*1.14;
    let totalcost = deliverycost +purchasecost;


    //output
    /*9. Display the title "Purchase summary" with the customer's name
    Display the Delivery Cost
    Display the Purchase Cost
    Display the Total Cost 
    Program ends.
    */
    console.log("Purchase summary for" + nameCustomer +":");
    console.log("Delivery Cost:" +"$" + deliverycost.toFixed(2));
    console.log("Purchase Cost :" + "$" + purchasecost.toFixed(2) );
    console.log("Total Cost:" + "$" + totalcost.toFixed(2));
    

    
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
