const Pagamento = require('./Pagamento.js')

class Pix extends Pagamento {
    constructor(valor, chavePix) {
        super(valor);
        this.chavePix = chavePix;
    }

    validarPagamento() {
        return this.chavePix.length > 0;
    }

    processarPagamento() {
        if (!this.validarPagamento()) {
            return 'Chave Pix inválida';
        }

        this.status = 'Pago';

        return `Pagamento de R$ ${this.valor} realizado via Pix`;
    }
}

module.exports = Pix