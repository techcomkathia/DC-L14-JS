use vendasLive14;

/*- SELECT com Limit
- Mostre os 3 primeiros itens da tabela item
- Liste os 2 primeiros produtores cadastrados na cidade de Fortaleza*/
select * from item limit 3;
select * from produtor where cidade = 'São Paulo' limit 2;
/*

- SELECT com ORDER BY
- Liste o nome e o valor unitário dos itens ordenados do mais caro para o mais barato
- Exiba os nomes dos produtores ordenados por ordem alfabética pela cidade
*/
select nomeItem, valorUnit from item order by valorUnit desc;
select nomeProdutor, cidade from produtor order by cidade asc;

/*
- SELECT com GROUP BY
- Conte o quantos tipos de produtos foram vendidos por nota fiscal 
- Conte quantas vendas cada produtor participou */

select fkNf as 'nota fiscal', count(fkItem) as 'quantidade produtos diferentes'
from venda
group by fkNf;

-- Exemplo de contagem com valores nulos
select uf as 'estado', count(nomeProdutor) as 'quantidade de produtores por cidade'
from produtor
group by uf;

select * from venda;

-- ------------------- SELECT COM JOIN --------------------

-- 1) Liste o nome de todos os itens e o nome dos seus respectivos produtores
select distinct item.nomeItem , produtor.nomeProdutor 
from venda
inner join item
	on venda.fkItem = item.idItem
inner join produtor
	on venda.fkprod = produtor.idProd;


-- 2) Exiba o número da nota fiscal, data de emissão e o nome dos itens vendidos nela. 
select nf.numeroNf, nf.dataNf, item.nomeItem
from venda
inner join nf
	on venda.fkNf = nf.idNf
inner join item
	on venda.fkItem = item.idItem;

-- 3) Mostre o nome dos produtores e o nome dos itens que eles vendem 

select distinct  produtor.nomeProdutor, item.nomeItem 
from venda
inner join item
	on venda.fkItem = item.idItem
inner join produtor
	on venda.fkprod = produtor.idProd
order by produtor.nomeProdutor;

-- --------------------------LEFT JOIN ----------------------------------------------------------------
-- para verificar elementos nulos, incluir 1 produtor, 1 item e  1 nf que não tem vendas
insert into item (nomeItem, valorUnit) value ('Coisa1', 10.00);
insert into nf (numeroNf, dataNf) value ('20203', '2026-07-01');
insert into produtor (nomeProdutor, endereco, cidade, uf) value ('Cleitinho soluções', 'rua 1', 'Recife', 'PE');


select distinct item.nomeItem , produtor.nomeProdutor 
from venda
inner join item
	on venda.fkItem = item.idItem
inner join produtor
	on venda.fkprod = produtor.idProd;


-- 4) Liste todos os itens mostrando o nome do produtor (mesmo que o item ainda não tenha produtor)
select distinct item.nomeItem , produtor.nomeProdutor 
from item -- tabela a esquerda
left join venda
	on venda.fkItem = item.idItem
left join produtor
	on venda.fkprod = produtor.idProd;
    
    
    
    
    
    
    
    
    
    
    
    

-- 5) Mostre o numero da nota fiscal e o nome dos itens vendidos, mas liste também as notas que não tivem nenhum item vendido
select nf.numeroNf, item.nomeItem
from nf -- tabela a esquerda que retornará TODOS os valores, incluindo Nf que não tenham correspondência com itens ou vendas
left join venda
	on venda.fkNf = nf.idNf
left join item
	on venda.fkItem = item.idItem
order by nomeItem ;

-- 6) Exiba o nome dos produtores e itens que eles produzem, mostrando também que ainda não produzem nenhum item
select distinct  produtor.nomeProdutor, item.nomeItem 
from produtor
left join venda
	on venda.fkprod = produtor.idProd
left join item
	on venda.fkItem = item.idItem
order by item.nomeItem ; -- mostra primeiro os valores nulos

select * from venda
