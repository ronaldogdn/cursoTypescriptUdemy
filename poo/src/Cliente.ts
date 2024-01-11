import Pessoa from "./Pessoa";
class Cliente extends Pessoa {
    private cpf:string;
    constructor(nome: string, idade: number, altura: number, cpf:string) {
        super(nome,idade,altura);
        this.cpf = cpf;
    }
    toString():string{
        return `Nome: ${this.nome} Idade: ${this.idade} Altura: ${this.altura}Cpf: ${this.cpf}`;
    }
}
const cliente1 = new Cliente("Ronaldo",25,180,"123456789");
console.log(cliente1.toString());
