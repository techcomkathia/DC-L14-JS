/*Pedido
Atributos : numero, cliente, produtos [], pagamento, status
Métodos: 
adicionarProduto()
removerProduto()
calcularTotal()
adicionarPagamento()
finalizarPedido()
exibirResumo()*/

class Pedido {
    #numero
    #produtos
    constructor(numero, cliente, pagamento, status) {
        this.#numero = numero;
        this.cliente = cliente;
        this.#produtos = [];
        this.pagamento = pagamento;
        this.status = status;
    }

    adicionarProduto(produto) {
        //é necessário verificar se o objeto passado é da classe Produto
        if(!produto instanceof Produto) {
            throw new Error('O produto precisa ser uma instância da classe Produto');

        }
        this.#produtos.push(produto);
    }

    removerProduto(nomeProduto) {
        let produtoEncontrado = this.#produtos.find(produto => produto.nome == nomeProduto);

        if(!produtoEncontrado) {
            throw new Error('O produto procurado nao foi encontrado');
        }
        this.#produtos.splice(this.#produtos.indexOf(produtoEncontrado), 1);
    }

    calcularTotal() {
        if(this.#produtos.length == 0) {
            return 0;
        }

        let total = 0;
        for (let produto of this.#produtos) {
            total += produto.preco;
        }
        return total;
    }

    adicionarPagamento(pagamento) {
        //é necessário verificar se o objeto passado é da classe Pagamento
        if(!pagamento instanceof Pagamento) {
            throw new Error('O pagamento precisa ser uma instância da classe Pagamento');
        }
        this.pagamento = pagamento;
    }

    finalizarPedido() {
        this.status = 'finalizado';
    }

    exibirResumo() {
        console.log(`Pedido ${this.#numero}`);
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`Produtos:`);
        for (let produto of this.#produtos) {
            console.log(`- ${produto.nome} - R$ ${produto.preco}`);
        }
        console.log(`Total: R$ ${this.calcularTotal()}`);
        //TODO: AJUSTAR PARA O ATRIBUTO DO PAGAMENTO DA CLASSE PAGAMENTO
        console.log(`Pagamento: ${this.pagamento}`);
        console.log(`Status: ${this.status}`);
    }


}