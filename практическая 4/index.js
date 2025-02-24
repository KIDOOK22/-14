// 1. 
let arr1 = ['item1', 'item2', 'item3'];
let ul = document.getElementById('elem');

arr1.forEach(item => {
  let li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// 2. 
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert(event.target.textContent);
  }
});

// 3. 
let table3 = document.createElement('table');
for (let i = 0; i < 5; i++) {
  let row = table3.insertRow();
  for (let j = 0; j < 5; j++) {
    row.insertCell();
  }
}
document.body.appendChild(table3);

// 4. 
let table4 = document.createElement('table');
for (let i = 0; i < 5; i++) {
  let row = table4.insertRow();
  for (let j = 0; j < 5; j++) {
    let cell = row.insertCell();
    cell.textContent = 'x';
  }
}
document.body.appendChild(table4);


// 5. 
let table5 = document.createElement('table');
let num = 1;
for (let i = 0; i < 5; i++) {
  let row = table5.insertRow();
  for (let j = 0; j < 5; j++) {
    let cell = row.insertCell();
    cell.textContent = num++;
  }
}
document.body.appendChild(table5);

// 6. 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table6 = document.createElement('table');
arr.forEach(rowArr => {
  let row = table6.insertRow();
  rowArr.forEach(item => {
    let cell = row.insertCell();
    cell.textContent = item;
  });
});
document.body.appendChild(table6);

// 7. 
let employees = [
 {name: 'employee1', age: 30, salary: 400},
 {name: 'employee2', age: 31, salary: 500},
 {name: 'employee3', age: 32, salary: 600},
];

let table7 = document.createElement('table');
let headerRow = table7.insertRow();
Object.keys(employees[0]).forEach(key => {
    let headerCell = headerRow.insertCell();
    headerCell.textContent = key;
});

employees.forEach(employee => {
  let row = table7.insertRow();
  Object.values(employee).forEach(value => {
    let cell = row.insertCell();
    cell.textContent = value;
  });
});

document.body.appendChild(table7);



// 8. 
let table8 = document.querySelector('table'); 
let button8 = document.createElement('button');
button8.textContent = 'Удвоить числа';

button8.addEventListener('click', () => {
    let cells = table8.querySelectorAll('td');
    cells.forEach(cell => {
        let num = parseInt(cell.textContent);
        if (!isNaN(num)) {
            cell.textContent = num * 2;
        }
    });
});

document.body.appendChild(button8);



// 9. 
let parent9 = document.getElementById('parent');
let button9 = document.getElementById('button');

button9.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = parent9.children.length + 1;
  parent9.appendChild(li); 
});

parent9.addEventListener('click', (event) => {
 if (event.target.tagName === 'LI') {
    parent9.removeChild(event.target);
 }
});





// 10. 
let ul10 = document.querySelector('ul'); 
let liElements = ul10.querySelectorAll('li');

liElements.forEach(li => {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = ' [Удалить]';
    a.addEventListener('click', function(event) {
        event.preventDefault();
        ul10.removeChild(li);
    });
    li.appendChild(a);
});




// 11. 
let ul11 = document.querySelector('ul'); 

ul11.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        let li = event.target;
        let input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent;

        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.removeChild(this);
        });

        li.textContent = '';
        li.appendChild(input);
        input.focus();
    }
});


// 12. 
let parent12 = document.getElementById('parent');
let paragraphs = parent12.querySelectorAll('p');

paragraphs.forEach(p => {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = ' [Удалить]';
    a.addEventListener('click', function(event) {
        event.preventDefault();
        parent12.removeChild(p);
    });
    p.appendChild(a);


    let span = p.querySelector('span');
    span.addEventListener('click', function() {
         let input = document.createElement('input');
         input.type = 'text';
         input.value = span.textContent;

         input.addEventListener('blur', function() {
            span.textContent = this.value;
            span.removeChild(this);
        });


        span.textContent = '';
         span.appendChild(input);
         input.focus();
    });
});


// 13. 
let paragraphs13 = document.querySelectorAll('p');

paragraphs13.forEach(p => {
  let a = document.createElement('a');
  a.href = '#';
  a.textContent = ' [Перечеркнуть]';

    a.addEventListener('click', function(event) {
    event.preventDefault();
        if (p.style.textDecoration === 'line-through') {
              p.style.textDecoration = 'none';
        } else {
             p.style.textDecoration = 'line-through';
            }
    });

  p.appendChild(a);
});



// 14. 
let ul14 = document.querySelector('ul');
ul14.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
     
    Array.from(ul14.children).forEach(li => li.style.backgroundColor = '');

      
    event.target.style.backgroundColor = 'red';
  }
});


// 15. 
function appendText(selector, text) {
  let elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.textContent += text;
  });
}


// 16. 
let paragraphs16 = document.querySelectorAll('p');
Array.from(paragraphs16).forEach(p => appendText('p', '!'));  



// 17. 
let paragraphs17 = document.querySelectorAll('p');
Array.from(paragraphs17).forEach((p, index) => p.textContent = (index + 1) + '. ' + p.textContent );


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

// 20. 
function createTable(rows, cols) {
	const table = document.createElement('table');
	for (let i = 0; i < rows; i++) {
	  const row = table.insertRow();
	  for (let j = 0; j < cols; j++) {
		row.insertCell();
	  }
	}
	return table;
  }
  
  const divElem = document.getElementById('elem');
  const newTable = createTable(3, 3); 
  divElem.appendChild(newTable);






