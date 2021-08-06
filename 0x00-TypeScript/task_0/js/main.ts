interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'Holberton',
    lastName: 'School',
    age: 0,
    location: 'Colombia',
};

const student2: Student = {
    firstName: 'School',
    lastName: 'Holberton',
    age: 1,
    location: 'Usa',
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tr: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableCellElement = document.createElement('td');
th1.innerHTML = 'firstName';
const th2: HTMLTableCellElement = document.createElement('td');
th2.innerHTML = 'location';

body.append(table);
table.append(thead);
table.append(tbody);
thead.append(tr);
tr.append(th1);
tr.append(th2);

studentsList.forEach(({ firstName, location }: Student) => {
  const trTb: HTMLTableRowElement = document.createElement('tr');
  tbody.append(trTb);

  let td: HTMLTableCellElement = document.createElement('td');
  td.innerHTML = firstName;
  trTb.append(td);

  td = document.createElement('td');
  td.innerHTML = location;
  trTb.append(td);
});
