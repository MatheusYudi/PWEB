const tie = (optionIA, optionPlayer) => optionIA === optionPlayer;

const youWon = (optionIA, optionPlayer) => {
    const value = optionIA * optionPlayer;

    const cases = {
        2: {
            // Papel >>> Pedra
            won: optionPlayer === 2,
            message: 'Papel cobre Pedra',
        },
        3: {
            // Pedra >>> Tesoura
            won: optionPlayer === 1,
            message: 'Pedra quebra Tesoura',
        },
        6: {
            // Tesoura >>> Papel
            won: optionPlayer === 3,
            message: 'Tesoura corta Papel',
        },
    }

    return cases[value];
};

const options = {
    1: 'Pedra',
    2: 'Papel',
    3: 'Tesoura',
}

const optionIA = Math.floor(Math.random() * 3) + 1;
const optionPlayer = Number(prompt('Digite uma opção - Pedra (1), Papel (2), Tesoura (3)'));

if (options[optionPlayer]) {
    const { won, message } = youWon(optionIA, optionPlayer);
    
    alert(tie(optionIA, optionPlayer) ? 'Empate' : `Você ${won ? 'ganhou' : 'perdeu'} !`);
    
    document.write(`
        <b>${message}</b><br>
        <li>IA -> ${options[optionIA]} (${optionIA})</li>
        <li>Você -> ${options[optionPlayer]} (${optionPlayer})</li>
    `);
};
