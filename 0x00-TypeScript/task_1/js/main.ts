interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const Teacher1: Teacher = {
  firstName: 'Holberton',
  lastName: 'School',
  fullTimeEmployee: false,
  yearsOfExperience: 0,
  location: 'Colombia',
};

const Teacher2: Teacher = {
  firstName: 'School',
  lastName: 'Holberton',
  fullTimeEmployee: true,
  yearsOfExperience: 1,
  location: 'Usa',
  tombo: true,
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);