let filmes: string[] = ["comédia","drama"];
filmes.push("aventura");
const filmesAnos: Array<number> = [];

for (let i = 2000; i <= new Date().getFullYear(); i++) {
   filmesAnos.push(i);    
}
console.log(filmesAnos);

//array para string OU número
let novoArray:string[] | number[] = [];
//array para string E número; pode misturar
let novoArray2:(string | number)[] = [];
let novoArray3:Array<string | number> = [];