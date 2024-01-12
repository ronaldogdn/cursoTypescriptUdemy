import { BancoDeDados } from './../BancoDeDados';
const conexaoBanco = BancoDeDados.factory({
    //não precisa ser na ordem de declaração
    ip: BancoDeDados.LOCAL,
    usuario : "root",
    senha : "root",
    tipoBanco : BancoDeDados.TIPO_MYSQL
});
console.log(conexaoBanco);