class Empresa {
    
    prestarServico(){
        return "";
    }
}
class Padaria extends Empresa {
    prestarServico(){
        return "Vendendo pão";
    }
}
console.log(new Padaria().prestarServico());