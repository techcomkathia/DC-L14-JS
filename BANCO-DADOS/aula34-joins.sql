use livrariaL14;
-- demonstração coluna calculada
select * from livros;
-- criar coluna com 'desconto de 5%' em todos os livros
select *, preco * 0.95 as 'preço com desconto'
from livros;


-- selecionar os nomes dos livros, nome do autor do livro e o preço
select livros.titulo, autores.nome, livros.preco
from livros
inner join autores
on livros.autor_id = autores.id_autor; 

-- selecionar os nomes dos livros, nome do autor do livro, nome categoria e o preço
-- inner join em 3 tabelas 
select livros.titulo, autores.nome, categorias.nome, livros.preco
from livros
inner join autores
	on livros.autor_id = autores.id_autor
inner join categorias
	on livros.categoria_id =  categorias.id_categoria; -- on tabela.fk = tabela.id;
    
-- criando alias para tabelas e nomendo colunas 
select l.titulo as 'Título livro', 
		a.nome as 'Nome autor', 
        c.nome as 'Nome categoria',
        l.preco as 'valor unitário'
from livros as l
inner join autores as a
	on l.autor_id = a.id_autor
inner join categorias as c
	on l.categoria_id =  c.id_categoria; -- on tabela.fk = tabela.id;



