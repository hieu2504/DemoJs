// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var words = ['ABC', 'XYZ', '123'];

const result = words.filter((word) => word == 'abc');

console.log(result.length);

const res = words.find((word) => word == 'ABc');
console.log(res);
