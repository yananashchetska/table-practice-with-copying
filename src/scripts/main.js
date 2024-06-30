'use strict';

const people = require('./lib/people.json');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
// option 1:

// const insertRows = (peopleArray) => {
//     peopleArray.forEach(person => {

//         const gender = person.sex === 'm' ? 'male'
//             : 'female';
//         const age = person.died - person.born;
//         const century = Math.ceil(person.died / 100);

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${person.name}</td>
//             <td>${gender}</td>
//             <td>${person.born}</td>
//             <td>${person.died}</td>
//             <td>${age}</td>
//             <td>${century}</td>
//         `;

//         table.appendChild(row);
//     });

// }

// option 2:

const insertRows = (peopleArray) => {
    peopleArray.forEach(person => {

        const gender = person.sex === 'm' ? 'male'
            : 'female';
        const age = person.died - person.born;
        const century = Math.ceil(person.died / 100);

        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const genderCell = document.createElement('td');
        const bornCell = document.createElement('td');
        const diedCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const centuryCell = document.createElement('td');
       
        nameCell.textContent = person.name;
        genderCell.textContent = gender;
        bornCell.textContent = person.born;
        diedCell.textContent = person.died;
        ageCell.textContent = age;
        centuryCell.textContent = century;

        row.append(nameCell, genderCell, bornCell, diedCell, ageCell,centuryCell);
        table.appendChild(row);
    });
    
};


insertRows(people);

// script for copy certain column, e.g. gender


const copyGender = () => {
    const rows = table.rows;

    for (const row of rows) {
        const cells = row.cells;
        const clonePosition = cells[1].cloneNode(true);

        row.insertBefore(clonePosition, cells[cells.length - 1]);
        // row.removeChild(cells[1]); can be added to remove old column;
    }
}

copyGender();