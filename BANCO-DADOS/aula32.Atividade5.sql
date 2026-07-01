use livrariaL14;

/* - **J.K. Rowling**: Nacionalidade Britânica, Data de Nascimento 31 de julho de 1965.
- **George R.R. Martin**: Nacionalidade Americana, Data de Nascimento 20 de setembro de 1948.
- **J.R.R. Tolkien**: Nacionalidade Britânica, Data de Nascimento 3 de janeiro de 1892.
- **Isaac Asimov**: Nacionalidade Americana, Data de Nascimento 2 de janeiro de 1920.
*/

insert into autores (nome, nacionalidade, data_nascimento)
values ('J.K. Rowling', 'Britânica', '1965-07-31' ),
( 'George R.R. Martin', 'Americana', '1948-09-03'),
('J.R.R. Tolkien', 'Britânica', '1892-01-03'),
('Isaac Asimov', 'Americana', '1920-01-02');

/*- **Fantasia**
- **Ficção Científica**
- **Mistério**
- **Romance**
*/

insert into categorias (nome)
values ('Fantasia'),
('Ficção Científica'),
('Mistério'),
('Romance');

/* - Harry Potter e a Pedra Filosofal, 1997, 39.90, 1, 110.
- Game of Thrones, 1996, 49.90, 2 ,  110.
- O Senhor dos Anéis, 1954, 59.90, 3, 110.
- Eu, Robô, 1950, 29.90, 4 ,111.
- O Hobbit**1937, 34.90, 3, 110.  */


insert into livros (titulo, ano_publicacao, preco, autor_id, categoria_id)
values ('Harry Potter e a Pedra Filosofal', 1997, 39.90, 1, 110),
('Game of Thrones', 1996, 49.90,2 ,  110),
(' Eu, Robô', 1950, 29.90, 4,111),
('O Hobbit', 1937, 34.90, 3, 110);



