interface IMeuUsuario{
    nome: string;
    email:  string;
    telefone : string;
}
abstract class Notificacao {    
    abstract enviar(usuario: IMeuUsuario): boolean;
}
class Email extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Enviando o e-mail para ${usuario.email} ...`);        
        return true;
    }    
}
class Sms extends Notificacao {
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