fetch(`http://localhost:8080/MeetingRoom/Employee/getEmployee`)
.then(response => response.json())
.then(employees => {



    const container = document.getElementById('employees-container');
    const template = document.getElementById('employee-card-template');
    employees.forEach((employee) => {
        
        const card = template.content.cloneNode(true);
      
        card.querySelector('.employee-id').textContent = employee.employeeId;
        card.querySelector('.employee-name').textContent = employee.empName;
        card.querySelector('.employee-email').textContent = employee.empEmail;
        container.appendChild(card);
      });
});