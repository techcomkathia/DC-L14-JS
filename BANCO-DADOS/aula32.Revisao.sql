create database if not exists revisaoLive14;

use revisaoLive14;
--
create table  if not exists professores (
	id_professor int  primary key auto_increment,
    nome varchar(150) not null,
    email varchar(150) not null unique    
);

create table if not exists turmas (
	id_turma int primary key auto_increment,
    data_inicio date not null,
    data_termino date,
    -- definir a coluna para a chave estrangeira 
    professor_id int,
    -- configuração da chave estrangeira
    foreign key (professor_id) references professores (id_professor)
);

create table if not exists alunos (
	id_aluno int primary key auto_increment,
    nome varchar(100) not null
);

create table if not exists aulas (
	id_aula int primary key auto_increment,
    turma_id int,
    foreign key (turma_id) references turmas (id_turma),
    data date not null
);

-- ------------ Tabela de ligacao ( relacionamento N,N )------------------
create table if not exists aulas_alunos (
	-- chave primária composta 
    aluno_id int,
    aula_id int,
    primary key (aluno_id, aula_id),
    -- é necessário ainda a configuração da chave estrangeira
    foreign key (aluno_id) references alunos (id_aluno),
    foreign key (aula_id) references aulas (id_aula)
);
-- ------------------------- COMANDO ALTER ------------------

/* Adicionando uma nova coluna*/
alter table alunos add column email varchar (150) not null unique;
alter table alunos add column senha varchar (100);

/* Alterar uma coluna que já existe*/
alter table alunos modify column nome varchar (150) not null;

/* Alterar para adicionar um valor padrão*/
alter table alunos modify column senha varchar(10) not null default '123mudar';

/* Alterar o valor do auto incemento*/ 
alter table alunos auto_increment = 200;

-- comando INSERT (DML) ------------------
insert into alunos (nome, email)
values ('Cleitinho', 'cleitinho.laranja@gato.com');

insert into alunos (nome,email)
values ('Sandoval', 'valzinho@gato.com'),
('Sebastião', 'tiao@gato.com'),
('Severino', 'bino@gato.com');

insert into alunos (nome, email) values ('Valzinho', 'valzinho2@gato.com');

insert into alunos (nome, email, senha) 
values ('Snow', 'nowzinho@gato.com', 'sache'),
('Bartô', 'bart@gato.com', 'pate'),
('Batata', 'batatinha@gato.com', 'senha');

