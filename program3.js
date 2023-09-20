"use strict";
/*Author: Thi My Linh Le
Date: 9/20/2023
Description: Assignment1 
Program 3 – Imperial to Metric Conversion

Write a console program that converts a weight given in tons (imperial), stones, pounds, and ounces to the metric equivalent in metric tons, kilograms, and grams.
Begin by designing your solution to this problem in pseudocode, which will be submitted along with the program.
After the numbers of tons, stones, pounds, and ounces are input by the user, the weight should be converted entirely into ounces (the lowest common denominator) 
and then divided by 35.274 to obtain the value in kilos. The JavaScript parseInt function should be used to break the total number of kilos into a whole number of metric tons and kilos.
The number of grams should be displayed to one decimal place.
Required formulas:
total ounces = 35840 * tons + 224 * stone + 16 * pounds + ounces
total kilos = total ounces / 35.274
metric tons = Int(kilos/1000)

*/

// DO NOT EDIT: The main function to house our program code 
let readlineSync = require('readline-sync');
function main()
{
    //input
    console.log("===Imperial To Metric Conversion===");
    let number_of_tons = parseFloat(readlineSync.question("Enter the number of tons:"));
    let number_of_stone = parseFloat(readlineSync.question("Enter the number of Stone:"));
    let number_of_pounds = parseFloat(readlineSync.question("Enter the number of pounds:"));
    let number_of_ounces = parseFloat(readlineSync.question("Enter the number of ounces:"));

    //Process
    //converts a weight given in tons, stones, pounds, and ounces
    let totalounces = 35840*number_of_tons + 224*number_of_stone + 16*number_of_pounds +number_of_ounces;
    let totalkilos = totalounces/35.274;
    let metrictons = parseInt((totalkilos/1000));
   
    
    //Output
    console.log("The metric weight is:" + parseInt(metrictons) + "metric tons," + parseInt(totalkilos) + "kilos, and" + totalounces.toFixed(1) + "grams.");
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
