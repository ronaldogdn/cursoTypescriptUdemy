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
    media(...notas: number []): number{
        const notasTotais = notas.reduce((total,atual) => total + atual,0) 
        return notasTotais / notas.length;
    }
}
const pessoa = new Pessoa("Ronaldo",25,195);
console.log(pessoa.toString());
console.log(pessoa.media(5,6.8,9,10));
