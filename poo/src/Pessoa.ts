class Pessoa{
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString():string{
        return `Nome: ${this.nome} Idade: ${this.idade} Altura: ${this.altura}`;
    }
}
const pessoa = new Pessoa("Ronaldo",25,195);

console.log(pessoa.toString());