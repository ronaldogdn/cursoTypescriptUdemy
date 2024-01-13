/// <reference path="./autenticacao/index.ts"/>
const novoRegistro = new Autenticacao.LoginRegistro();
const resultado = novoRegistro.registro({
    nome : "Ronaldo",
    email :"ronaldo@gomes.com.br",
    senha : "123456789", 
    dataNascimento: new Date("1995-2-20")
});
console.log(resultado);