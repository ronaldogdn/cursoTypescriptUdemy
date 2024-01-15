interface ICampoQualquer{
    length: number;
}
function mostrarQuantidadeTotal<T extends ICampoQualquer>(valor:T) : T {
    console.log(`Total: ${valor.length}`)
    return valor;
}
console.log(mostrarQuantidadeTotal([10,20,30]));