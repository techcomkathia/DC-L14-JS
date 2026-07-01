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


