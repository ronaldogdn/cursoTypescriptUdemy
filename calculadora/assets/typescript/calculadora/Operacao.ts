interface OperacaoOpcoes{
    onCalculado: any
}
export default class Operacao {
    
    private onCalculado: any;

    constructor(
        opts: OperacaoOpcoes,
        private operacao: string[] = [],
    )
    {
        this.onCalculado = opts.onCalculado;
    }

    calcular() : void{
        let resultado = this.obterResultado();
        if(resultado.length > 12){
            resultado = resultado.substring(0,12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }

    adicionar(valor: string): number{
        if(this.operacao.length === 3){
            this.calcular()
        }
        return this.operacao.push(valor);
    }

    obterResultado():string{
        let resultado: string = "0";
        try {
            resultado = (eval(this.operacao.join(""))).toString();
        } catch (error) {
            resultado = "ERRO";            
        }
        return resultado;
    }

    get ultimaPosicao():string{
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";

    }
    set ultimaPosicao(valor: string){
        const ultimoIndex = this.operacao.length ? this.operacao.length -1 : 0;
        this.operacao[ultimoIndex] = valor;
    }

    get lenght():number{
        return this.operacao.length;
    }
}