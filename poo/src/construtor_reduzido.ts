class Construtor {
    constructor(private _produto: string, protected valorTotal: number) {
    }
    get getProduto(){
        return this._produto;
    }
    set setProduto(produto:string){
        this._produto = produto;
    }
}
const teste = new Construtor("teste",22);
console.log(teste.getProduto);
teste.setProduto = "teste teste"
console.log(teste.getProduto);