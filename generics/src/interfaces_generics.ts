interface IProcessamento<T>{
    valor: T;
    realizarProcessamento(arg: T):T;
}
const texto: IProcessamento<string> = {
    valor: "Ronaldo",
    realizarProcessamento(argumento: string) : string {
        return argumento.toUpperCase();
    }
}
console.log(texto.valor);
console.log(texto.realizarProcessamento("teste teste"));

const numero: IProcessamento<number> = {
    valor: 10,
    realizarProcessamento(argumento: number) : number {
        return argumento * 2;
    }
}
console.log(numero.valor);
console.log(numero.realizarProcessamento(10));
