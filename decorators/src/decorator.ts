function debug(classe:unknown) {
    console.log("Criada a classe",classe)
}
@debug
class PrimeiraClasse {
    constructor() {
        
    }
}
function log(construtor: any) {
    return class extends construtor {
        created_at: Date = new Date("2023-01-16")
    }
}
@log
class SegundaClasse {
    constructor() {
        
    }
}
console.log(new SegundaClasse());