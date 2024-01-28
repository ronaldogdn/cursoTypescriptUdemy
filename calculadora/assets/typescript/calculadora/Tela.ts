export default class Tela{
    constructor(
        private elemento: HTMLDivElement | null = document.querySelector("#values"),
        private elementoOperacao: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
    )
    {
        this.conteudo = "0";
    }
    set operacao(valor: any){
        
        if(this.elementoOperacao){
            this.elementoOperacao.innerHTML = valor;
        }
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