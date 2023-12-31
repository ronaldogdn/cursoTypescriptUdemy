function mostrarMensagem(texto:string | number) :boolean{
    return true;
}

//arrow functions
const show = (codigo: number):number => {
    if(codigo > 0)
        return codigo;
    return -1;
}
//atribuição de valor nos parâmetros
function enviarEmail(para:string,assunto: string = "Sem assunto",rementente?: string) : void{
    console.log(para,assunto);
}