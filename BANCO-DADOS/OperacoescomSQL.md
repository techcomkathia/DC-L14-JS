
# Aula: Operações Básicas com Agregadores no MySQL

## Introdução
Nesta aula vamos aprender a utilizar funções agregadoras no MySQL. Essas funções são úteis para realizar cálculos sobre conjuntos de dados, como somar valores, calcular médias, encontrar valores mínimos e máximos, entre outros.

---

Colunas calculadas em SQL permitem criar valores derivados diretamente dentro da consulta, utilizando operações matemáticas ou funções agregadoras, sem a necessidade de alterar a estrutura da tabela. Essas colunas são úteis para realizar cálculos diretamente nas consultas, economizando tempo e processamento ao evitar a necessidade de operações em várias etapas.

## Colunas Calculadas Simples

Você pode criar colunas calculadas diretamente em um `SELECT` usando expressões aritméticas. Aqui estão alguns exemplos:

### Exemplo de Cálculo de Preço Total

Suponha que você tenha uma tabela de vendas com a quantidade de produtos vendidos e o preço de cada produto. Para calcular o valor total da venda, basta multiplicar o preço pela quantidade:

```sql
SELECT nome_produto, 
       preco_unitario, 
       quantidade, 
       preco_unitario * quantidade AS total_venda
FROM vendas;
```

Neste exemplo:
- A coluna `total_venda` é calculada multiplicando o `preco_unitario` pela `quantidade`.


### Exemplo de Desconto Aplicado

Você também pode calcular um valor com desconto aplicado:

```sql
SELECT nome_produto, 
       preco_unitario, 
       desconto, 
       preco_unitario - (preco_unitario * (desconto / 100)) AS preco_com_desconto
FROM vendas;
```

Aqui, o preço com desconto é calculado subtraindo o valor do desconto aplicado ao preço unitário.


## Funções Agregadoras

### 1. SUM()
Soma os valores de uma coluna numérica.

```sql
-- Exemplo simples
SELECT SUM(coluna) AS apelidoColuna
FROM tabela

SELECT SUM(valor) AS total_vendas
FROM vendas;
```

### 2. AVG()
Calcula a média dos valores de uma coluna numérica.

```sql
SELECT AVG(coluna) AS apelidoColuna
FROM tabela;

SELECT AVG(preco) AS preco_medio
FROM produtos;
```

### 3. MIN()
Retorna o menor valor de uma coluna.

```sql
SELECT MIN(coluna) AS apelidoColuna
FROM tabela;

SELECT MIN(preco) AS preco_minimo
FROM produtos;
```

### 4. MAX()
Retorna o maior valor de uma coluna.

```sql
SELECT MAX(coluna) AS apelidoColuna
FROM tabela;

SELECT MAX(preco) AS preco_maximo
FROM produtos;
```

### 5. COUNT()
Conta o número de registros.

```sql
SELECT COUNT(coluna) AS apelidoColuna
FROM tabela;
--ou 
SELECT COUNT (*) AS apelidoColuna
FROM tabela;

SELECT COUNT(*) AS total_linhas
FROM clientes;
```

---

## 2. Colunas Calculadas com Funções Agregadoras

Você pode usar funções agregadoras em colunas calculadas, como `SUM()`, `AVG()`, `COUNT()`, etc. Isso é útil quando você deseja calcular um valor agregado sobre um conjunto de dados.

### Exemplo de Preço Médio por Produto

Calcular o preço médio dos produtos vendidos:

```sql
SELECT nome_produto, 
       AVG(preco_unitario) AS preco_medio
FROM vendas
GROUP BY nome_produto;
```

Aqui, a função `AVG()` calcula o preço médio para cada produto, e o `GROUP BY` agrupa os dados por produto.

### Exemplo de Total de Vendas por Cliente

Calcular o total de vendas por cliente:

```sql
SELECT nome_cliente, 
       SUM(preco_unitario * quantidade) AS total_vendas
FROM vendas
GROUP BY nome_cliente;
```

Neste caso, a função `SUM()` é usada para calcular o total de vendas de cada cliente, multiplicando o preço unitário pela quantidade de produtos comprados.



## Agregadores com WHERE

É possível filtrar dados antes de aplicar os agregadores usando a cláusula WHERE.

```sql

SELECT SUM(coluna) AS apelidoColuna
FROM tabela
WHERE coluna = condicao;


-- Exemplo: total de vendas feitas no mês de janeiro
SELECT SUM(valor) AS total_janeiro
FROM vendas
WHERE MONTH(data_venda) = 1;
```

---

## Agregadores com GROUP BY

Usamos GROUP BY para agrupar os dados antes de aplicar agregações.

```sql

SELECT coluna1, SUM(coluna2) AS apelidoColuna2
FROM tabela
GROUP BY coluna1;


-- Exemplo: total de vendas por cliente
SELECT cliente_id, SUM(valor) AS total_por_cliente
FROM vendas
GROUP BY cliente_id;
```

---

## Agregadores com JOIN

Também podemos usar agregadores em SELECTs com JOINs.

```sql
-- Exemplo: total de produtos comprados por cada pessoa
SELECT 
  tabela1.coluna,
  tabela2.coluna
  SUM(tabela2.coluna) AS apelidoColuna
FROM tabela2
INNER JOIN tabela1 ON tabela2.chavePrimaria = tabela1.chavePrimaria
GROUP BY tabela2.nome;

SELECT 
  pessoas.nome,
  SUM(compras.quantidade) AS total_comprado
FROM compras
INNER JOIN pessoas ON compras.pessoa_id = pessoas.id
GROUP BY pessoas.nome;
```
---


## 4. Colunas Calculadas com Joins

Você pode calcular valores que dependem de dados em mais de uma tabela, usando `JOIN`.

### 4.1. Exemplo de Valor Total de Venda com JOIN

Imagine que você tenha uma tabela de `clientes` e uma tabela de `vendas`. Para calcular o total gasto por cada cliente, você pode fazer um `JOIN` entre as tabelas e calcular o total:

```sql
SELECT clientes.nome_cliente, 
       SUM(vendas.preco_unitario * vendas.quantidade) AS total_gasto
FROM vendas
JOIN clientes ON vendas.id_cliente = clientes.id_cliente
GROUP BY clientes.nome_cliente;
```

Aqui, a coluna calculada `total_gasto` soma o preço de cada venda multiplicado pela quantidade, para cada cliente.

## 5. Usando Alias para Colunas Calculadas

Em SQL, você pode nomear suas colunas calculadas utilizando `AS`. Isso torna as consultas mais legíveis e facilita o entendimento dos resultados.

### Exemplo de Alias para Coluna Calculada

```sql
SELECT nome_produto, 
       preco_unitario, 
       quantidade, 
       (preco_unitario * quantidade) AS total_venda
FROM vendas;
```