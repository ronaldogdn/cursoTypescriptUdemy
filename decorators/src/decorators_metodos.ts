function decoratorMetodo(target:unknown, propertyKey:string,descriptor:PropertyDescriptor) {
    console.log(target, propertyKey,descriptor);
}
class TratarMensagem {
    @decoratorMetodo
    mensagem(...mensagens:string[]){
        return mensagens;
    }
}
const instancia = new TratarMensagem();
console.log(instancia.mensagem("Olá","Seja bem-vindo","Ronaldo"));
