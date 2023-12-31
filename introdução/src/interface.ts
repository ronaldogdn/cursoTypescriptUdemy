interface IEndereco{
    logradouro: string;
    numero: number;
    bairro: string;
    readonly cidade: string;
}
let endereco: IEndereco;
endereco = {
    logradouro:"Rua desembargador Cid Campelo",
    numero: 7390,
    bairro: "CIC",
    cidade: "Curitiba"
}
endereco.bairro = "Cidade Industrial";
//interface com função
interface ISoma{
    (num1: number, num2: number) : number;
}
let soma1 : ISoma;
soma1 = (x: number, y: number): number => {
    return x + y;
}
interface ICalculos{
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    dividir(a: number, b: number): number;
}
let calculadora: ICalculos;
const dividir = (n1:number,n2:number) => n1 / n2;
calculadora = {
    somar: (a:number, b:number) =>{
        return a + b;
    },
    subtrair:(a:number,b:number) =>{
        return a - b;
    },
    //outro jeito de fazer
    dividir: dividir
}
//arrys em interfaces
interface ICategoria{
    nome: string;
    id: number;
    categoriaPai?: ICategoria;
}
const frontEnd: ICategoria = {
    nome: "Front-End",
    id: 1
}
const backEnd: ICategoria = {
    nome: "Back-End",
    id: 2
}
interface IMenu {
    categorias: ICategoria[];
}
let menu: IMenu = {
    categorias: [frontEnd, backEnd]
};
interface ITodo{
    //[indice: number] : string;
    [indice: number] : string | number | ICategoria;
}
let minhasTarefas:ITodo;
minhasTarefas = ["Estudar","trabalhar","dormir"];
console.log(minhasTarefas[0]);