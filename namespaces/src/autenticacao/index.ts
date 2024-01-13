namespace Autenticacao{
    interface IUsuario{
        email: string;
        senha: string;
    }
    interface ICadastro{
        nome: string;
        email:string; 
        senha: string;
        dataNascimento: Date;
    }
    export class LoginRegistro {
        
        login(usuario: IUsuario){
            return usuario;    
        }
        registro(usuario: ICadastro){
            return usuario;
        }
    }
}