const Pagamento = require('./Pagamento');


class Cartao extends Pagamento {
    constructor(valor, numeroCartao, bandeira, tipo, parcelas = 1) {
        super(valor);

        this.numeroCartao = numeroCartao;
        this.bandeira = bandeira;
        this.tipo = tipo;
        this.parcelas = parcelas;

        // Cartão de débito é sempre em 1x
        if (this.tipo === 'debito') {
            this.parcelas = 1;
        }
    }

    validarPagamento() {
        const tiposValidos = ['credito', 'debito'];

        return (
            this.numeroCartao.length > 0 &&
            tiposValidos.includes(this.tipo)
        );
    }

    processarPagamento() {
        if (!this.validarPagamento()) {
            return 'Dados do cartão inválidos ou tipo do pagamento inválido';
        }

        this.status = 'Pago';

        if (this.tipo === 'debito') {
            return `Pagamento de R$ ${this.valor} realizado no cartão de débito`;
        }

        return `Pagamento de R$ ${this.valor} foi realizado no cartão de crédito em ${this.parcelas}x`;
    }
}

module.exports = Cartao;