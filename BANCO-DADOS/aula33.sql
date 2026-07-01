-- ATIVIDADE DE VENDAS
-- ---------------- DDL------------------------
create database if not exists vendasLive14;

use vendasLive14;

create table if not exists item(
	idItem int auto_increment primary key,
    nomeItem varchar(50),
    valorUnit decimal(10,2)
);

-- correção para não nulicidade dos campos nomeItem e valorUnit 
alter table item modify nomeItem varchar(50) not null;
alter table item modify valorUnit decimal(10,2) not null;

create table  if not exists nf(
	idNf int auto_increment primary key,
    numeroNf int not null,
    dataNf date not null
);

create table if not exists produtor(
  idProd int auto_increment primary key,
  nomeProdutor varchar(100) not null
);

create table if not exists  venda(
	idVenda int auto_increment primary key,
    fkNf int not null,
    fkItem int not null,
    fkProd int not null,
    quantidade int not null,
    desconto int,
    foreign key (fkNf) references nf (idNf),
    foreign key (fkItem) references item (idItem),
    foreign key (fkProd) references produtor(idProd)
);
-- ------------DML---------------
-- 2) Crie informações para  : 5 produtores, 5 itens, 7 Nfs

/* INSERT INTO nomeTabela ( coluna1, coluna2 ...)
VALUES (valorColuna1, valorColuna2 ...)*/

INSERT INTO item (nomeItem, valorUnit) VALUES
('Notebook', 3500.00),
('Mouse ', 150.00),
('Teclado Mecânico ', 280.00),
('Monitor 24"', 900.00),
('Headset ', 450.00);


-- 2️ Inserir 5 produtores (fabricantes ou fornecedores)
INSERT INTO produtor (nomeProdutor) VALUES
('Dell Technologies'),
('Logitech International'),
('Redragon Brasil'),
('Samsung Electronics'),
('HyperX Gaming');

INSERT INTO nf (numeroNf, dataNf) VALUES
(1001, '2025-01-15'),
(1002, '2025-01-17'),
(1003, '2025-02-02'),
(1004, '2025-02-18'),
(1005, '2025-03-10'),
(1006, '2025-03-22'),
(1007, '2025-04-05');

INSERT INTO venda (fkNf, fkItem, fkProd, quantidade, desconto) VALUES
( 1 , 1 ,1 , 10, 5 ),
( 1, 2,2 , 3, null),
( 1, 3, 3, 3, null),
( 1, 4 ,4 ,1 , null),
( 1, 5 , 5, 1, null),
( 2 ,1 ,3 , 4, null ),
( 2 ,2 ,4 , 5, null ),
( 2,3 , 5, 7, null),
( 3, 3, 5, 5, null),
( 3, 1, 1,4, null ),
( 3,2 , 4,5 , null),
( 3, 4, 5 ,7 ,null );

INSERT INTO venda (fkNf, fkItem, fkProd, quantidade, desconto) VALUES
(4 ,1 ,5 ,10 , 15),
(4 ,2 ,4 ,12 ,5 ),
(4 ,3 ,1 ,13 ,5 ),
(4 ,4 ,2 ,15 ,5 ),
(5 ,1 ,3 ,3 , null ),
(5 ,2 ,5 ,6 , null ),
(6 ,1 ,1 ,22 , 15 ),
(6 ,2 ,3 ,25 ,20 ),
(7 ,1 ,1 ,10 ,3 ),
(7 ,2 ,2 ,10 ,4 ),
(7 ,3 ,3 ,10 ,4 ),
(7 ,4 ,5 ,10 ,1 );

-- -------------- DML - update ----------
-- Atualize o valor do produto com código 5 para 2 reais a menos
update ITEM 
set valorUnit = valorUnit- 2
where idItem = 5;

-- Adicione as colunas de endereço na tabela produtor (endereço, cidade, UF)
alter table produtor add column endereco varchar(150); 
alter table produtor add column cidade varchar(50);
alter table produtor add column uf char(2);

/*Cada produtor deve possuir **endereço completo, cidade e UF**, conforme o respectivo código (`codProd`):

- **codProd = 1** → Dell Technologies — Av. das Nações Unidas, 12901 — São Paulo/SP
- **codProd = 2** → Logitech International — Rua Gomes de Carvalho, 1609 — São Paulo/SP
- **codProd = 3** → Redragon Brasil — Av. Paulista, 2000 — São Paulo/SP
- **codProd = 4** → Samsung Electronics — Av. Presidente Vargas, 620 — Rio de Janeiro/RJ
- **codProd = 5** → HyperX Gaming — Rua das Palmeiras, 50 — Campinas/SP-- */


update produtor 
set endereco = 'Av. das Nações Unidas, 12901', cidade = 'São Paulo', uf= 'SP'
where idProd = 1;

update produtor 
set endereco = 'Rua Gomes de Carvalho, 1609',  cidade = 'São Paulo', uf= 'SP'
where idProd = 2;


/* - SELECT
- Liste todos os dados da tabela ITEM
- Liste apenas o nome dos produtores

- SELECT com WHERE
- Liste o nome e o valor unitário dos itens cujo o valor unitário seja maior que 50 reais
- Mostre o nome de todos os produtores que estejam na cidade de Fortaleza
- Exiba o número da nota e a data de emissão das notas fiscais emitidas no dia (definir dia cadastrado no banco)
*/

-- Liste todos os dados da tabela ITEM
select * from item;

-- Liste apenas o nome dos produtores
select nomeProdutor as nome
from produtor;

-- - Liste o nome e o valor unitário dos itens cujo o valor unitário seja maior que 50 reais
select 
	nomeItem as nome, 
    valorUnit as valor
from item
	where valorUnit > 50;
    
-- Mostre o nome de todos os produtores que estejam na cidade de Fortaleza
select nomeProdutor as nome
from produtor
where cidade = 'São Paulo';

select * from nf;
-- exiba o número da nota e a data de emissão das notas fiscais emitidas no dia (definir dia cadastrado no banco)
select 
	numeroNf as numero, 
    dataNf as data
from nf
where dataNf = '2025-01-15';




