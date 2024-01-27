export default class Tela{
    constructor(private elemento: HTMLDivElement | null = document.querySelector("#values")){
        this.conteudo = "0";
    }

    set conteudo(valor: string){
        if(valor.toString().length > 12){
            valor = "ERRO";
        }
        if(this.elemento){
            this.elemento.innerHTML = valor;
        }
    }
    get conteudo():string{
        if(this.elemento){
            return this.elemento.innerHTML;
        }
        return "0";
    }
}