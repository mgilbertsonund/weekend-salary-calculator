console.log('hello');

let monthlySalary = 0;
let employeeTable = document.querySelector('#employee-data-table');
let budgetStatus = false;

function submitEmployeeData(event) {
    event.preventDefault();

    // initialize variables
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let employeeID = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    
    // display data on screen while also formatting salary corrertly
    renderEmployeeData(firstName, lastName, employeeID, jobTitle, formatAnnualSalary(annualSalary));

    // make salary a number again and sum into total montly budget, then calculate total monthy budget
    annualSalary = Number(annualSalary);
    monthlySalary = Number(monthlySalary);
    monthlySalary += annualSalary;
    monthlyBudget(monthlySalary);
    checkStatus(monthlySalary);

    // clear inputs
    clearInputFields();
}

// function that returns the average monthly cost of salary, and updates when deleteRow is clicked
function monthlyBudget(salary) {
    renderTotalMontly = document.querySelector('#monthly-salary-cost');
    if(salary === monthlySalary) {
        salary = Math.round(salary / 12);
        renderTotalMontly.innerHTML = formatAnnualSalary(salary);
    } else if(salary < monthlySalary && salary > 0) {
        monthlySalary = salary;
        salary = Math.round(salary / 12);
        renderTotalMontly.innerHTML = formatAnnualSalary(salary);
    } else {
        monthlySalary = 0;
        renderTotalMontly.innerHTML = salary;
    }
}

// deletes a row when clicked, and updates monthly salary by targetting the column of the salary data, then subtracting from total monthly
function deleteRow(event) {
    let newMonthlySalary = monthlySalary - Number(event.target.parentElement.parentElement.children[4].textContent.replace(/\$|,/g, ''));
    monthlyBudget(newMonthlySalary);
    checkStatus(newMonthlySalary);
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

function checkStatus(monthlySalary) {
    let adjustedSalary = monthlySalary / 12;
    let budgetStyle = document.querySelector('#budget-style');

    if(adjustedSalary > 20000) {
        console.log('here');
        overBudget = true;
        budgetStyle.classList.add('over-budget');
        budgetStyle.classList.remove('under-budget');

    } else {
        console.log('no here');
        overBudget = false;
        budgetStyle.classList.add('under-budget');
        budgetStyle.classList.remove('over-budget');

    }
}