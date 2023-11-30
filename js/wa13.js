//Problem 1
let employees = '[ { "first_name" : "Sam", "department" : "Tech", "designation" : "Manager",  "salary" : "40000", "raise_eligible" : "true"}, ' +
'{ "first_name" : "Mary", "department" : "Finance", "designation" : "Trainee",  "salary" : "18500", "raise_eligible" : "true"},' +
'{ "first_name" : "Bill", "department" : "HR", "designation" : "Executive",  "salary" : "21200", "raise_eligible" : "false"} ]';

let employeesJSON = JSON.parse(employees);
console.log("Problem 1:");
console.log(employeesJSON);
printEmployees();

//Problem 2
let company = '[ { "company_name" : "Tech Stars", "website" : "www.techstars.site", "employees" : ' + employees + '} ]';
let companyJSON = JSON.parse(company);
console.log("Problem 2:");
console.log(companyJSON);
console.log("Company 1: \nname: " + companyJSON[0]["company_name"] +
    "\nwebsite: " + companyJSON[0]["website"] +
    "\nemployees: ");
printEmployees();

//Problem 3
//pushed new element for new employee
employeesJSON.push({"first_name" : "Anna", "department" : "Tech", "designation" : "Executive",  "salary" : "25600", "raise_eligible" : "false"}); 
console.log("Problem 3:");
console.log(employeesJSON);
printEmployees();

companyJSON[0]['employees'].push({"first_name" : "Anna", "department" : "Tech", "designation" : "Executive",  "salary" : "25600", "raise_eligible" : "false"}); 
console.log(companyJSON);
console.log("Company 1: \nname: " + companyJSON[0]["company_name"] +
    "\nwebsite: " + companyJSON[0]["website"] +
    "\nemployees: ");
for (let i = 0; i < companyJSON[0]["employees"].length; i++) {
    console.log("Employee " + (i+1) + 
    ":\nname: " + companyJSON[0]["employees"][i]["first_name"] +
    "\ndepartment: " + companyJSON[0]["employees"][i]["department"] +
    "\ndesignation: " + companyJSON[0]["employees"][i]["designation"] +
    "\nsalary: " + companyJSON[0]["employees"][i]["salary"] +
    "\nraise eligibility: " + companyJSON[0]["employees"][i]["raise_eligible"]);
}

//Problem 4
console.log("Problem 4:");
let totalSalary = 0;
for (let i = 0; i < companyJSON[0]["employees"].length; i++) {
    totalSalary += parseInt(companyJSON[0]["employees"][i]["salary"]);
}
console.log("The sum of all company employee salaries is " + totalSalary);

//Problem 5
console.log("Problem 5:");
function payRaise(company) {
    for (let i = 0; i < company[0]["employees"].length; i++) {
        if (company[0]["employees"][i]["raise_eligible"] == "true") {
            let raise = company[0]["employees"][i]["salary"] * .1;
            company[0]["employees"][i]["salary"] = (parseInt(company[0]["employees"][i]["salary"]) + raise).toString();
            console.log(company[0]["employees"][i]["first_name"] + " recieves a raise of " + raise + "\n" + company[0]["employees"][i]["first_name"] + "'s salary is now " + company[0]["employees"][i]["salary"]);
        }
        else {
            console.log(company[0]["employees"][i]["first_name"] + " is not eligible for a raise");
        }
    }
}
payRaise(companyJSON);
console.log(companyJSON);


//Problem 6
console.log("Problem 6:")
let fromHome = ['Anna', 'Sam'];
for (let i = 0; i < companyJSON[0]["employees"].length; i++) {
    let home = "false";
    for (let j = 0; j < fromHome.length; j++) {
        if (companyJSON[0]["employees"][i]["first_name"] == fromHome[j]) {
            home = "true";
            companyJSON[0]["employees"][i]["wfh"] = "true";
        }
    }
    if (home != "true") {
        companyJSON[0]["employees"][i]["wfh"] = "false";
    }
}
for (let i = 0; i < companyJSON[0]["employees"].length; i++) {
    console.log("Employee " + (i+1) + 
    ":\nname: " + companyJSON[0]["employees"][i]["first_name"] +
    "\ndepartment: " + companyJSON[0]["employees"][i]["department"] +
    "\ndesignation: " + companyJSON[0]["employees"][i]["designation"] +
    "\nsalary: " + companyJSON[0]["employees"][i]["salary"] +
    "\nraise eligibility: " + companyJSON[0]["employees"][i]["raise_eligible"] +
    "\nworking from home: " + companyJSON[0]["employees"][i]["wfh"]);
}
console.log(companyJSON);


function printEmployees() {
    for (let i = 0; i < employeesJSON.length; i++) {
        console.log("Employee " + (i+1) + 
        ":\nname: " + employeesJSON[i]["first_name"] +
        "\ndepartment: " + employeesJSON[i]["department"] +
        "\ndesignation: " + employeesJSON[i]["designation"] +
        "\nsalary: " + employeesJSON[i]["salary"] +
        "\nraise eligibility: " + employeesJSON[i]["raise_eligible"]);
    }
}