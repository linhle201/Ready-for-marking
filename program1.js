"use strict";
/*Author: Thi My Linh Le
Date: 9/15/2023
Description: Assignment1 - program 1
Hipster’s Local Vinyl Records sell and hand-deliver vinyl records to their customers. Delivery is charged at a rate of $15 per kilometer. 
All purchases are subject to a 14% sales tax. 

*/

// DO NOT EDIT: The main function to house our program code 
let readlineSync = require('readline-sync');
function main()
{
    //input
    console.log("=== Hipster's local Vinyl Records- Customer Order Details===");
    let nameCustomer = readlineSync.question("Enter the customer's name:");
    let distance = parseFloat(readlineSync.question("Enter the distance in kilometers for delivery:"));
    let recordspurchase = parseFloat(readlineSync.question("Enter the cost of the cost of records purchased:"));

    //processing
    let deliverycost = distance*15;
    let purchasecost = recordspurchase*1.14;
    let totalcost = deliverycost +recordscost;


    //output
    console.log("Purchase summary for" + nameCustomer +":");
    console.log("Delivery Cost:" +"$" + deliverycost.tofixed(2));
    console.log("Purchase Cost :" + "$" + purchasecost.tofixed(2) ):
    console.log("Total Cost:" + "$" + totalcost.tofixed(2))
    

    
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
