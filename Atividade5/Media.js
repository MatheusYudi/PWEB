		const aluno = prompt('Qual o seu nome');

let notas = [];

const guardaNota = (nota) => notas.push(parseFloat(nota));
const calculaMedia = (notas) => notas.reduce((prev, curr) => prev + curr) / notas.length;

while (notas.length < 3) {
	nota = prompt(`Digite sua ${notas.length + 1}° nota`);

	if (!nota) {
		break;
	}
	else {
		guardaNota(nota);
	}
}

if (notas.length == 3) {
	const media = calculaMedia(notas);

	alert(`${media > 5 ? 'Parabéns' : 'Estude mais'}, ${aluno || 'Aluno'}. Sua média é ${media}`);
}
