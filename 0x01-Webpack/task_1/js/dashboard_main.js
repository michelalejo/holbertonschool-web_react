import $ from 'jquery';
import { debounce } from 'lodash';

// HTML

const body = document.getElementsByTagName('body')[0];
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const button = document.createElement('button');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

p1.innerHTML = 'Holberton Dashboard';
p2.innerHTML = 'Dashboard data for the students';
button.innerHTML = 'Click here to get started';
p3.setAttribute('id', 'count');
p4.innerHTML = 'Copyright - Holberton School';

body.append(p1, p2, button, p3, p4);

// js

let count = 0;

const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', debounce(updateCounter));
