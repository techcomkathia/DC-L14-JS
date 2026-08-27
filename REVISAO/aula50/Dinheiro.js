const Pagamento = require('./Pagamento.js')


class Dinheiro extends Pagamento {
    constructor(valor, valorRecebido) {
        super(valor);
        this.valorRecebido = valorRecebido;
        this.troco = 0;
    }

    calcularTroco() {
        if (this.valorRecebido > this.valor) {
            this.troco = this.valorRecebido - this.valor;
        }

        return this.troco;
    }

    processarPagamento() {
        if (this.valorRecebido < this.valor) {
            return 'Valor recebido insuficiente';
        }

        this.calcularTroco();

        this.status = 'Pago';

        if (this.troco > 0) {
            return `Pagamento realizado. Troco: R$ ${this.troco}`;
        }

        return 'Pagamento realizado sem troco';
    }
}

module.exports = Dinheiro