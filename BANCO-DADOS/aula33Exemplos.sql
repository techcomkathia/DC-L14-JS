use livrarial14;

-- selecionar todas as colunas da tabela de categorias
select * from categorias;

-- selecionar apenas algumas colunas de uma tabela
select titulo, ano_publicacao, preco 
from livros;

-- nomer colunas para o select
select 
	titulo as 'nome livro', 
	ano_publicacao as 'ano de lançamento', 
	preco as 'preço'
from livros;

-- selecionar com base em uma condição
select * 
from livros
where preco >30;

select * 
from livros
where titulo = 'harry potter e a pedra filosofal';

select * from livros;

-- selecionar registros com base em mais de uma condição
-- categoria 110 e autor 2
select * from livros
where categoria_id = 110 or autor_id = 4
limit 1;

-- limitando valores
 select * from categorias
 limit 2;
 
 select * from livros
where categoria_id = 110 or autor_id = 4
limit 1;

-- ordenação por valores númericos
select * from livros
order by ano_publicacao asc; -- menor para o maior

-- ordenação por valores númericos
select * from livros
order by ano_publicacao desc; --  maior para o menor

-- ordenação por valores textuais 
select * from livros
order by titulo; -- padrão de a a z

select * from livros
order by titulo desc; -- padrão de z a a

-- ------------- agrupamento com contagem ----------------
select categoria_id, count(*) as 'quantidade de livros cadastrados' from livros
group by categoria_id;

select autor_id, count(*) as 'quantidade de livros do autor' from livros
group by autor_id;

insert into livros (titulo, ano_publicacao, autor_id, categoria_id, preco)
values ('teste1', '2025', 1, 110, 100),  ('teste2', '2025', 2, 110, 100);

-- Distinct -- Retorna valores sem repetição
select distinct categoria_id from livros ;




