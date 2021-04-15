const makeRA = () => Math.random().toString(36).slice(2);
const nome = 'Matheus Yudi';

const aluno1 = {
    nome,
    RA: makeRA(),
};

const aluno2 = new Object();
aluno2.nome = nome;
aluno2.RA = makeRA();

const aluno3 = Object.create({});
aluno3.nome = nome;
aluno3.RA = makeRA();

const alunos = [aluno1, aluno2, aluno3];
alunos.forEach((aluno, index) => document.write(`<li>aluno_${++index}: ${JSON.stringify(aluno)}</li>`));