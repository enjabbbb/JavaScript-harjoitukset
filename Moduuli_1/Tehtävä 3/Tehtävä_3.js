const num1 = prompt("Give the first number: ");
const num2 = prompt("give the second number: ");
const num3 = prompt("give the third number: ");
const sumofnumbers = Number(num1) + Number(num2) + Number(num3);
const productofnumbers = Number(num1) * Number(num2) * Number(num3);
const averageofnumbers = sumofnumbers / 3;

document.querySelector('#sum').innerText = 'sum' + sumofnumbers;
document.querySelector('#product').innerText = 'product' + productofnumbers;
document.querySelector('#average').innerText = 'average' + averageofnumbers;

