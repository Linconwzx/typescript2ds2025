namespace empresa{
    export class Cliente extends Pessoa{

        private _codigo: number;
        private _saldo: number = 0;

        constructor (codigo:number){
            super();
            this._codigo = codigo;
        }

        get codigo(){
            return this._codigo;
        }


        get saldo(){
            return this._saldo;
        }

        public depositar(valor:number){
            this._saldo += valor;
        }

        public comprar(valorCompra:number):boolean{
            if(this._saldo >= valorCompra){
                this._saldo = this._saldo - valorCompra;
                return true;
            }else{
                return false;
            }
        }

        

        

    }
}