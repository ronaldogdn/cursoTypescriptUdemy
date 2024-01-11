interface IMeuUsuario{
    nome: string;
    email:  string;
    telefone : string;
}
interface INotificacao2{
    enviar(usuario: IMeuUsuario): boolean;
}
abstract class Notificacao2{    
    abstract enviar(): boolean;
}
class Email2 extends Notificacao2 implements INotificacao2{
    nome: string;
    email: string;
    
    constructor(usuario:IMeuUsuario){
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar(): boolean {
        console.log(`Enviando o e-mail para ${this.email} ...`);        
        return true;
    }    
}
class Sms2 extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Enviando o sms para ${usuario.email} ...`);        
        return true;
    }
}
new Email().enviar({
    nome: "Ronaldo Gomes",
    email: "ronaldo@gmail.com",
    telefone: "415689745632"
});