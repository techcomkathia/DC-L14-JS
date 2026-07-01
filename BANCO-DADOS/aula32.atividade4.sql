/*
## ATIVIDADE 4

No banco de dados Livraria, altere a tabela autores para adiconar uma nova coluna chamada data_nascimento.
 O formato dessa nova coluna será date. O auto incremento do id dos livros deve iniciar em 2000 e dos categorias em 110.   

Mude o tipo de dado da tabela projects na coluna date (do banco de dados da ATIVIDADE 3) para DATE,
 mude o valor padrão para as senhas da tabela users para 123mudar

*/

use livrariaL14;

-- altere a tabela autores para adiconar uma nova coluna chamada data_nascimento.
-- O formato dessa nova coluna será date.
alter table autores add column data_nascimento date not null;

-- O auto incremento do id dos livros deve iniciar em 2000 e dos categorias em 110.
alter table livros auto_increment = 2000;
alter table categorias auto_increment = 110;

use projetos;

-- para DATE,
alter table projects modify column date date not null;

-- mude o valor padrão para as senhas da tabela users para 123mudar
alter table users modify column senha varchar(12) default '123Mudar';





