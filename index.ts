#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Contact Numbers Menu");
// define type of array
type ContactType = {ID : number, Name : string, PhoneNumber : number};

let contacts : ContactType[] = [];
let contactSerialNo = 1;

async function contactMenuInput(){

    const inputContact = await inquirer.prompt({
        type :  "list",
        name : "contact",
        message : "Select your option",
        choices : ["Add Contact", "View Contacts", "Close Menu"]
    })

    let {contact} = inputContact; // destructuring
    
    if(contact === "Add Contact") addContact();
    if(contact === "View Contacts") viewContacts;
    if(contact === "Close Menu") console.log(`\nThank You for using Contact Menu`)
  
}
contactMenuInput();

async function addContact() {
const inputContactDetails = await inquirer.prompt([
    {
      type : "input",
      name : "personName",
      message : "Enter Persson Name!",
    },
    {
        type : "number",
        name :"phoneNumber",
        message : "Enter Contact Number"
    }
]);
const {personName, phoneNumber} = inputContactDetails;

contacts.push({ID : contactSerialNo++, Name : personName, PhoneNumber : phoneNumber});
console.log(`\nNew Contact number has been added\n`)
contactMenuInput();
}

function viewContacts(){
if(contacts.length > 0) contacts.forEach((user)=>
console.log(`\n${user.ID}. Person Name: ${user.Name} ---Contact Number: ${user.PhoneNumber}
`))
else console.log(`\nNo Contacts available!`)
contactMenuInput();
}
