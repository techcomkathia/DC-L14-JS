class Pagamento {
    constructor(valor) {
        this.valor = valor;
        this.status = 'Pendente';
    }

    processarPagamento() {
        this.status = 'Pago';
    }

    cancelarPagamento() {
        this.status = 'Cancelado';
    }

    exibirStatus() {
        return `Valor: R$ ${this.valor} | Status: ${this.status}`;
    }
}

module.exports = Pagamento;