// 1.  2. 
let arr = ['apple', 'banana', 'orange'];
const elemUl = document.getElementById('elem');

arr.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
        alert(li.textContent);
    });
    elemUl.appendChild(li);
});



// 3.  4. 
const table1 = document.getElementById('table1');
for (let i = 0; i < 5; i++) {
    let row = table1.insertRow();
    for (let j = 0; j < 5; j++) {
        let cell = row.insertCell();
        cell.textContent = 'x'; 
    }
}


// 5. 
const table2 = document.getElementById('table2');
let num = 1;
for (let i = 0; i < 5; i++) {
    let row = table2.insertRow();
    for (let j = 0; j < 5; j++) {
        let cell = row.insertCell();
        cell.textContent = num++;
    }
}


// 6. 
let arr2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const table3 = document.getElementById('table3');

arr2d.forEach(rowArr => {
    let row = table3.insertRow();
    rowArr.forEach(item => {
        let cell = row.insertCell();
        cell.textContent = item;
    });
});


// 7. 
let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

const table4 = document.getElementById('table4');
let headerRow = table4.insertRow();
Object.keys(employees[0]).forEach(key => {  
    let headerCell = headerRow.insertCell();
    headerCell.textContent = key;
});

employees.forEach(employee => {
    let row = table4.insertRow();
    Object.values(employee).forEach(value => {
        let cell = row.insertCell();
        cell.textContent = value;
    });
});


// 8. 
const table5 = document.getElementById('table5'); 
const doubleButton = document.getElementById('doubleButton');


for (let i = 0; i < 3; i++) {  
    let row = table5.insertRow();
    for (let j = 0; j < 3; j++) {
        let cell = row.insertCell();
        cell.textContent = (i * 3) + j + 1;
    }
}

doubleButton.addEventListener('click', () => {
    for (let i = 0; i < table5.rows.length; i++) {
        for (let j = 0; j < table5.rows[i].cells.length; j++) {
            let cell = table5.rows[i].cells[j];
            cell.textContent = parseInt(cell.textContent) * 2; 
        }
    }
});



 
// 9. 
const parentUl = document.getElementById('parent');
const addButton = document.getElementById('button');

addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = parentUl.children.length + 1;
    li.addEventListener('click', () => li.remove());
    parentUl.appendChild(li);
});

parentUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});



// 10. 
const listWithDeleteLinks = document.getElementById('listWithDeleteLinks');

for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = `Item ${i} `;

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Delete';
    deleteLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        li.remove();
    });

    li.appendChild(deleteLink);
    listWithDeleteLinks.appendChild(li);
}

// ... (Other solutions follow the same logic as in the previous response)
//  Continue for tasks 11-20...


// ... other solutions as provided earlier

// 15. 
function appendText(selector, text) {
  document.querySelectorAll(selector).forEach(el => {
    el.textContent += text;
  });
}


// 16. 
document.querySelectorAll('.paragraph').forEach(p => appendText(p, '!'));

// 17.  
document.querySelectorAll(".paragraph").forEach((p, index) => {
    p.textContent = index + 1 + ". " + p.textContent;
});



// 18. 
function appendText(element, text) {
    element.textContent += text;
}

// 19. 
function appendElem(ulElement, text) {
    let li = document.createElement('li');
    li.textContent = text;
    ulElement.appendChild(li);
}

//20. 
function createTable(rows, cols) {   
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = 'x';  
        }
    }
    return table;
}

const elemForTable = document.getElementById('elemForTable');
const newTable = createTable(3, 3);  
elemForTable.appendChild(newTable);



// 11. 

const editableList = document.getElementById('editableList');

for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent =  `Editable item ${i}`;
    editableList.appendChild(li);

    li.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent; 


        li.innerHTML = ''; 
        li.appendChild(input);


        input.addEventListener('blur', () => { 
            li.textContent = input.value;
        });

        input.focus(); 
    });


}



 // 12. 
const parentDiv = document.getElementById('parentDiv');

parentDiv.querySelectorAll('p').forEach((p, index) => {
    const span = p.querySelector('span');
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Delete';

    deleteLink.addEventListener('click', (event) => {
        event.preventDefault();
        p.remove();
    });

    p.appendChild(deleteLink);


    span.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent; 

        span.innerHTML = ''; 
        span.appendChild(input);



        input.addEventListener('blur', () => {
            span.textContent = input.value;
        });

        input.focus();
    });
});



//13. 
document.querySelectorAll('p:not(.paragraph)').forEach(p => { 
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Strike';
    link.addEventListener('click', (event) => {
        event.preventDefault();
        p.style.textDecoration = p.style.textDecoration === 'line-through' ? '' : 'line-through';

    });
    p.appendChild(link);
});



// 14. 
const activatableList = document.getElementById('activatableList');
activatableList.addEventListener('click', function(event) {
  if (event.target && event.target.nodeName == "LI") {
     
     Array.from(this.children).forEach(li => li.classList.remove('active'));
     event.target.classList.add('active');
  }
});
