
//ATIVIDADE 1 

//crie uma classe livro que terá os seguintes atributos:
//titulo, autor, ano_publicacao, disponibilidade (valor padrão true), preco (valor padrão 0)
//crie um metodo para "emprestar o livro", esse método deve verificar se o livro está disponível, se estiver disponível, ele deve mudar o atributo disponibilidade para false e retornar a string "Livro emprestado", se não estiver disponível, deverá retornar a string "Livro indisponível"
//crie um metodo para "devolver o livro", esse método deverá mudar o atributo disponibilidade para true e retornar a string "Livro devolvido"
//crie um método de "exibir detalhes do livro", esse método deverá retornar uma string com os detalhes do livro no seguinte formato: "O livro X do autor Y foi publicado em Z ,custa W reais e está disponível para emprestimo."

//crie 3 instancias da classe livro e exiba os detalhes de cada um deles

class  Livro{
    constructor(titulo, autor, ano_publicacao, disponibilidade = true, preco = 0){
        this.titulo = titulo;
        this.autor = autor;
        this.ano_publicacao = ano_publicacao;
        this.disponibilidade = disponibilidade;
        this.preco = preco;
    }

    //metodos
    emprestarLivro(){
        if(this.disponibilidade){
            this.disponibilidade = false;
            return "Livro emprestado"
        }
        return "Livro indisponível"
    }

  
    devolverLivro(){
        this.disponibilidade = true;
        return "Livro devolvido"
    }

    exibirDetalhes(){
        return `O livro ${this.titulo} do autor ${this.autor} foi publicado em ${this.ano_publicacao}, custa ${this.preco} reais e esta ${this.disponibilidade ? "disponível" : "indisponível"} para emprestimo.`
    }
}

const livro1 = new Livro("Livro 1", "Autor 1", 2000, false, 10)
const livro2 = new Livro("Livro 2", "Autor 2", 2010)
const livro3 = new Livro("Livro 3", "Autor 3", 2020, false, 20)

console.log(livro1.exibirDetalhes())
console.log(livro2.exibirDetalhes())
console.log(livro3.exibirDetalhes())


//atividade2
//crie um classe Biblioteca que tenha os seguintes atributos:
//livros (array de livros) INICIALMENTE VAZIO
//quantidade de livros (valor padrão 0)
//crie um metodo para "adicionar livro", esse metodo deverá adicionar um livro ao array de livros. Importante, esse livro deve ser uma instancia da classe Livro.
//crie um metodo para "remover livro", esse metodo deverá remover um livro do array de livros irá receber o nome do livro como parametro e deverá remover o livro do array de livros
//dica: use o metodo filter para remover o livro
//crie um metodo para "listar livros", esse metodo deverá listar todos os livros do array de livros