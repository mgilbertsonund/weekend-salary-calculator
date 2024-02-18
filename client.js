console.log('hello');

function submitEmployeeData(event) {
    event.preventDefault();
    console.log('submit new employee data');

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let employeeID = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    let employeeTable = document.querySelector('#employee-data-table');

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

}