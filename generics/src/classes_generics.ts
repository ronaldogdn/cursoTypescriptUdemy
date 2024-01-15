interface CadastroUsuario{
    id : number;
    nome : string;
    email: string;
    senha: string;
}
class CadastroBasico<InterfaceBasica> {
    criar(dados: InterfaceBasica){
        console.log("criando novo registro");
        return dados;
    }
    selecionar(id: number){
        console.log("dados do registro de ID: "+id);
    }
    editar(id: number, dados:InterfaceBasica):InterfaceBasica{
        console.log("editando registro ID: "+id);
        return dados;
    }
    excluir(id: number){
        console.log("dados do registro de ID: "+id+" foram excluídos.");
    }
}
const novo = new CadastroBasico<CadastroUsuario>();
novo.criar({
    id: 1,
    nome: "Ronaldo",
    email: "ronaldo@ronaldo",
    senha: "123456789"
});