console.log('hello');

let monthlySalary = 0;
let employeeTable = document.querySelector('#employee-data-table');

function submitEmployeeData(event) {
    event.preventDefault();

    // initialize variables
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let employeeID = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    
    // display data on screen whilealso formatting salary corrertly
    renderEmployeeData(firstName, lastName, employeeID, jobTitle, formatAnnualSalary(annualSalary));

    // make salary a number again and sum into total montly budget, then calculate total monthy budget
    annualSalary = Number(annualSalary);
    monthlySalary = Number(monthlySalary);
    monthlySalary += annualSalary;
    monthlyBudget();

    // clear inputs
    clearInputFields();
}

// function that returns the average monthly cost of salary
function monthlyBudget() {
    let totalMonthly = Math.round(monthlySalary / 12);
    let totalMonthlyFormatted = document.querySelector('#monthly-salary-cost');
    totalMonthlyFormatted.innerHTML = formatAnnualSalary(totalMonthly);
}

// deletes a row when clicked
function deleteRow(event) {
    event.target.parentElement.parentElement.remove();
}

// formats numbers into currency
function formatAnnualSalary(salary) {
    let annualSalaryFormatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0, 
    }).format(salary);
    return annualSalaryFormatted;
}

// creates new data in the table on the DoOM
function renderEmployeeData(firstName, lastName, employeeID, jobTitle, annualSalaryFormatted) {
    employeeTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeID}</td>
        <td>${jobTitle}</td>
        <td>${annualSalaryFormatted}</td>
        <td><button onclick="deleteRow(event)">Delete</button></td>
    </tr>
    `;
}

// clear inputs
function clearInputFields() {
    document.querySelector('#first-name').value='';
    document.querySelector('#last-name').value='';
    document.querySelector('#id-number').value='';
    document.querySelector('#job-title').selectedIndex = 0;
    document.querySelector('#annual-salary').value='';
}