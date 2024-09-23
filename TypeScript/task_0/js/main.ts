// Define the student Interface

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//create two srudents

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

//assign the students to an array List

const studentsList: Student[] = [student1, student2];

// Create the table and render students

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
