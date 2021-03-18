const sum = (x, y) => x+y;
const sub = (x, y) => x-y;
const mult = (x, y) => x*y;
const div = (x, y) => x/y;
const mod = (x, y) => x%y;

let num1 = parseInt(prompt('Digite um número'));
let num2 = parseInt(prompt('Digite outro número'));

if (num1 && num2) {
	document.write(`
		<b>Operações com num1 = ${num1} e num2 = ${num2}:</b>
		<li>Soma (num1 + num2) -> ${sum(num1, num2)}</li>
		<li>Subtração (num1 - num2) -> ${sub(num1, num2)}</li>
		<li>Multiplicação (num1 * num2) -> ${mult(num1, num2)}</li>
		<li>Divisão inteira (num1 / num2) -> ${div(num1, num2).toFixed(2)}</li>
		<li>Resto da divisão (num1 % num2)-> ${mod(num1, num2)}</li>
	`);
}
