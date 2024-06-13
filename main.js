#! /usr/bin/env node 
import inquirer from 'inquirer';
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value .";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled ",
        choices: ["Ms office", "Html", "Java script", "Typescript", "Pythone"]
    }
]);
const tuitionFee = {
    "MS.Office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\nTuition Fees: ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value.";
        }
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}/-\n`);
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionFees === paymentAmount) {
    console.log(`congragulations,you have sucessfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next ?",
            choices: ["view Status", "Exit"]
        }
    ]);
    if (ans.select === "view Status") {
        console.log(`Student Name:${answer.students}`);
        console.log(`Student ID:${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuition Fees Paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExisting Student Managementsystem\n");
    }
    ;
}
else {
    console.log("Invalid amount due to course\n");
}
;
