CREATE DATABASE escolaLive14;
USE escolaLive14;

-- Professores
CREATE TABLE professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(50),
    salario DECIMAL(10,2)
);

-- Alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    cidade VARCHAR(50)
);

-- Disciplinas
CREATE TABLE disciplinas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT,
    professor_id INT,
    FOREIGN KEY (professor_id) REFERENCES professores(id)
);

-- Matrículas
CREATE TABLE matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    disciplina_id INT,
    nota1 DECIMAL(4,2),
    nota2 DECIMAL(4,2),
    faltas INT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);


INSERT INTO professores(nome, especialidade, salario) VALUES
('Carlos Henrique','Banco de Dados',5200),
('Fernanda Lima','Programação Web',6100),
('Juliana Souza','Redes',4800),
('Roberto Alves','Python',5900),
('Mariana Costa','Front-end',5600),
('João Gomes',null,5600);

INSERT INTO alunos(nome,idade,cidade) VALUES
('Ana Paula',18,'Fortaleza'),
('Bruno Silva',20,'Caucaia'),
('Carla Mendes',19,'Fortaleza'),
('Diego Lima',21,'Maracanaú'),
('Eduarda Alves',18,'Fortaleza'),
('Felipe Souza',22,'Aquiraz'),
('Gabriel Rocha',20,'Fortaleza'),
('Helena Martins',19,'Eusébio'),
('Igor Costa',23,'Fortaleza'),
('Julia Fernandes',18,'Pacatuba'),
('Karen Melo',20,'Maranguape'),
('Lucas Nascimento',21,'Fortaleza'),
('Michele Melo',20,'Recife');

INSERT INTO disciplinas(nome,carga_horaria,professor_id) VALUES
('Banco de Dados',80,1),
('HTML e CSS',60,5),
('JavaScript',80,2),
('Python',100,4),
('Redes de Computadores',60,3),
('Power BI',40,NULL),
('React',40,NULL);


INSERT INTO matriculas(aluno_id,disciplina_id,nota1,nota2,faltas) VALUES
(1,1,8.5,9.0,3),
(1,2,7.0,8.0,2),
(2,1,6.0,7.5,5),
(2,3,8.0,7.5,4),
(3,4,9.5,9.0,1),
(4,2,5.0,6.5,10),
(4,5,7.0,8.0,4),
(5,3,10.0,9.5,0),
(6,1,7.5,8.5,3),
(7,4,8.0,8.0,2),
(7,3,9.0,9.0,1),
(8,5,6.5,7.0,6),
(9,2,9.0,10.0,0),
(10,4,5.5,6.0,8);

-- 1) Mostrar todos os alunos e o nome suas disciplinas, 
-- incluindo os que estão sem disciplina matriculada. (left join)

select d.nome as 'nome disciplina' , a.nome as 'nome alunos'
from disciplinas as d
left join matriculas as m
	on d.id = m.disciplina_id
left join alunos as a
	on m.aluno_id = a.id
order by a.nome ;

-- 2) Mostrar as disciplinas com os nomes de professores. 
-- Incluir APENAS as disciplinas com professores (inner join)
select * from disciplinas;

select d.nome as 'disciplina' , p.nome as 'professor'
from professores as p
inner join disciplinas as d
	on p.id = d.professor_id;

-- 3) Faça uma seleção com o nome de todos os alunos e suas médias, 
-- inclua também o nome da disciplina e a quantidade de faltas (inner join, coluna calculada (média))
select a.nome as 'nome alunos',
	d.nome as 'nome disciplina',
    m.faltas, 
    m.nota1,
    m.nota2,
    (m.nota1 + m.nota2)/2 as 'média'
from disciplinas as d
inner join matriculas as m
	on d.id = m.disciplina_id
inner join alunos as a
	on m.aluno_id = a.id
order by m.faltas;

-- 4) Realize a contagem de quantos alunos existem por disciplina , mostrar o nome da disciplina. (inner join com count e group by)

select d.nome as 'nome disciplina',
		count(a.nome) as 'quantidade de alunos'	
from disciplinas as d
inner join matriculas as m
	on d.id = m.disciplina_id
inner join alunos as a
	on m.aluno_id = a.id
group by d.nome;
