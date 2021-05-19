let soma = 0;

for (let i = 2; i <= proccess.argv.length - 1; i++) {
    soma += Number(proccess.argv[i]);
}

console.log(soma);