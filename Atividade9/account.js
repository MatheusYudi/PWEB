const Conta = function() {
    this.setNomeCorrentista = (value) => this.__nomeCorrentista = value;
    this.getNomeCorrentista = () => this.__nomeCorrentista;

    this.setBanco = (value) => this.__banco = value;
    this.getBanco = () => this.__banco;

    this.setNumeroConta = (value) => this.__numeroConta = value;
    this.getNumeroConta = () => this.__numeroConta;

    this.setSaldo = (value) => this.__saldo = value;
    this.getSaldo = () => this.__saldo;
};

const ContaCorrente = function() {
    this.setSaldoEspecial = (value) => this.__saldoEspecial = value;
    this.getSaldoEspecial = () => this.__saldoEspecial;
};

const ContaPoupanca = function() {
    this.setJuros = (value) => this.__juros = value;
    this.getJuros = () => this.__juros;

    this.setDataVencimento = (value) => this.__dataVencimento = value;
    this.getDataVencimento = () => this.__dataVencimento;
};

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

const tipoConta = prompt('Conta Corrente ou Poupança (1 ou 2)');

if (tipoConta) {
    const objConta = tipoConta == 1 ? new ContaCorrente() : new ContaPoupanca();

    objConta.setNomeCorrentista(prompt('Nome do Correntista'));
    objConta.setBanco(prompt('Banco'));
    objConta.setNumeroConta(prompt('Número da Conta'));
    objConta.setSaldo(prompt('Saldo'));

    if (tipoConta == 1) {
        objConta.setSaldoEspecial(prompt('Saldo Especial'));
    }
    else {
        objConta.setJuros(prompt('Juros'));
        objConta.setDataVencimento(prompt('Data de Vencimento'));
    }
    
    document.write(`
        <p>Nome do Correntista</p>
        <li>${objConta.getNomeCorrentista()}</li>
        <p>Banco</p>
        <li>${objConta.getBanco()}</li>
        <p>Número da Conta</p>
        <li>${objConta.getNumeroConta()}</li>
        <p>Saldo</p>
        <li>${objConta.getSaldo()}</li>
    `);
    
    if (tipoConta == 1) {
        document.write(`
            <p>Saldo Especial</p>
            <li>${objConta.getSaldoEspecial()}</li>
        `);
    }
    else {
        document.write(`
            <p>Juros</p>
            <li>${objConta.getJuros()}</li>
            <p>Data de Vencimento</p>
            <li>${objConta.getDataVencimento()}</li>
        `);
    }
};
