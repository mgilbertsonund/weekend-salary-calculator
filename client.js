console.log('hello');

function submitEmployeeData(event) {
    event.preventDefault();
    // console.log('submit new employee data');

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let employeeID = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    let employeeTable = document.querySelector('#employee-data-table');

    // console.log(firstName);
    // console.log(lastName);
    // console.log(employeeID);
    // console.log(jobTitle);
    // console.log(annualSalary);

    employeeTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeID}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onclick="deleteRow(event)">Delete</button></td>
    </tr>
    `;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(employeeID);
    // console.log(jobTitle);
    // console.log(annualSalary);

    // these reset the form input fields to blank
    // except for job title, it resets to index 0 or 'Select a Job'
    document.querySelector('#first-name').value='';
    document.querySelector('#last-name').value='';
    document.querySelector('#id-number').value='';
    document.querySelector('#job-title').selectedIndex = 0;
    document.querySelector('#annual-salary').value='';
}
