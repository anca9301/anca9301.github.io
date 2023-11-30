//Problem 1
let employees = '[ { "first_name" : "Sam", "department" : "Tech", "designation" : "Manager",  "salary" : "40000", "raise_eligible" : "true"}, ' +
'{ "first_name" : "Mary", "department" : "Finance", "designation" : "Trainee",  "salary" : "18500", "raise_eligible" : "true"},' +
'{ "first_name" : "Bill", "department" : "HR", "designation" : "Executive",  "salary" : "21200", "raise_eligible" : "false"} ]';

let employeesJSON = JSON.parse(employees);
console.log("Problem 1:");
console.log(employeesJSON);
for (let i = 0; i < 3; i++) {
    console.log("Employee " + (i+1) + 
    ":\nname: " + employeesJSON[i]["first_name"] +
    "\ndepartment: " + employeesJSON[i]["department"] +
    "\ndesignation: " + employeesJSON[i]["designation"] +
    "\nsalary: " + employeesJSON[i]["salary"] +
    "\nraise eligibility: " + employeesJSON[i]["raise_eligible"]);
}

//Problem 2
let company = '[ { "company_name" : "Tech Stars", "website" : "www.techstars.site", "employees" : ' + employees + '} ]';
let companyJSON = JSON.parse(company);
console.log("Problem 2:");
console.log(companyJSON);
console.log("Company 1: \nname: " + companyJSON[0]["company_name"] +
    "\nwebsite: " + companyJSON[0]["website"] +
    "\nemployees: ");
for (let i = 0; i < 3; i++) {
    console.log("Employee " + (i+1) + 
    ":\nname: " + companyJSON[0]["employees"][i]["first_name"] +
    "\ndepartment: " + companyJSON[0]["employees"][i]["department"] +
    "\ndesignation: " + companyJSON[0]["employees"][i]["designation"] +
    "\nsalary: " + companyJSON[0]["employees"][i]["salary"] +
    "\nraise eligibility: " + companyJSON[0]["employees"][i]["raise_eligible"]);
}

//Problem 3
//pushed new element for new employee
employeesJSON.push({"first_name" : "Anna", "department" : "Tech", "designation" : "Executive",  "salary" : "25600", "raise_eligible" : "false"}); 
console.log("Problem 3:");
console.log(employeesJSON);
for (let i = 0; i < 4; i++) {
    console.log("Employee " + (i+1) + 
    ":\nname: " + employeesJSON[i]["first_name"] +
    "\ndepartment: " + employeesJSON[i]["department"] +
    "\ndesignation: " + employeesJSON[i]["designation"] +
    "\nsalary: " + employeesJSON[i]["salary"] +
    "\nraise eligibility: " + employeesJSON[i]["raise_eligible"]);
}

companyJSON[0]['employees'].push({"first_name" : "Anna", "department" : "Tech", "designation" : "Executive",  "salary" : "25600", "raise_eligible" : "false"}); 
console.log(companyJSON);
console.log("Company 1: \nname: " + companyJSON[0]["company_name"] +
    "\nwebsite: " + companyJSON[0]["website"] +
    "\nemployees: ");
for (let i = 0; i < 4; i++) {
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
for (let i = 0; i < 4; i++) {
    totalSalary += parseInt(companyJSON[0]["employees"][i]["salary"]);
}
console.log("The sum of all company employee salaries is " + totalSalary);

//Problem 5
console.log("Problem 5:");