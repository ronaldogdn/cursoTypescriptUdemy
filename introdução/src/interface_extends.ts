interface IPessoa{
    nome: string;
    idade: number;
    id: number;
}
interface IUsuario extends IPessoa{
    email: string;
    senha: string;
}
const usuario1: IUsuario = {
    nome: "Ronaldo",
    idade: 15,
    id: 1,
    email: "ronaldo@gmail.com",
    senha: "12345679",
}
console.log(usuario1);