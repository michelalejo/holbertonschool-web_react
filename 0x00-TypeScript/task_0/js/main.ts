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

var body = document.getElementsByTagName("body")[0];
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");

for (var k = 0; k < 2; k++) {
  for (var i = 0; i < 4; i++) {
    var hilera = document.createElement("tr");
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(Object.getOwnPropertyNames(studentsList[k])[i]);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(Object.values(studentsList[k])[i]);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);
  }
  if (k < 1) {
    var salto = document.createElement("br");
    tblBody.appendChild(salto);
  }

}
tabla.appendChild(tblBody);
body.appendChild(tabla);
tabla.setAttribute("border", "2");
