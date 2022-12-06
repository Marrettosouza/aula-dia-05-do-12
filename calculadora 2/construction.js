function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa("jose", "da costa");

console.log(p1.nome);
console.log(p1.sobrenome);

class Pessoas{
    constructor(nome, cpf, nascimento){
        this.nome = nome
        this.cpf = cpf
        this.nascimento = nascimento
    }
}

const p2 = new Pessoas("jose", 1234567, "10/02/2015");
const p3 = new Pessoas("joao", 12345678, "15/05/1990");

console.log(p2.nascimento);
console.log(p3.cpf);
console.log(p3.nome);