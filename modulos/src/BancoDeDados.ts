export interface IBancoDeDados{
    ip : string;
    usuario : string;
    senha : string;
    tipoBanco : string;
}

export class BancoDeDados {
    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySql";
    static TIPO_SQLSERVER = "SqlServer";

    constructor(
        private ip: string, 
        private usuario: string,
        private senha: string,
        private tipoBanco: string) {
    }
    static factory(parametros: IBancoDeDados){
        const tipoDeBanco:string[] = [BancoDeDados.TIPO_MYSQL,BancoDeDados.TIPO_SQLSERVER];
        if(!tipoDeBanco.includes(parametros.tipoBanco)){
            throw new Error("Tipo de banco incorreto.");
        }

        return new BancoDeDados(
            parametros.ip,
            parametros.usuario,
            parametros.senha,
            parametros.tipoBanco,
        );
    }
}
