export default class DataHora{
    constructor (
        private elementoData: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
        private elementoHora: HTMLDivElement | null = document.querySelector("#datetime time")
    )
    {
        this.renderizar();
        setInterval(() => this.renderizar(), 1000);
    }

    renderizar(){
        const dataAtual = new Date();
        const dia = dataAtual.getDay();
        const mes = dataAtual.toLocaleDateString("pt-BR",{
            month: "long"
        });
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours();
        const minutos = dataAtual.getMinutes().toString().padStart(2,'0');
        const segundos = dataAtual.getSeconds();
        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ":" : " ";

        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minutos}:${segundos}`;
    }

    set data(conteudo: string){
        if(this.elementoData ){
            this.elementoData.innerHTML = conteudo;
        }
    }
    set hora(conteudo: string){
        if(this.elementoHora ){
            this.elementoHora.innerHTML = conteudo;
        }
    }
    
}