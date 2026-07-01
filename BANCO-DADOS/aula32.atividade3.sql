CREATE DATABASE projetos;

USE projetos;

create table users(
id int auto_increment primary key,
nome varchar(45) not null, -- alterar para name
username varchar(45)  not null unique,
senha varchar(45)  not null, -- alterar para password
email varchar(45)  not null
);

create table projects(
id int auto_increment primary key,
name varchar (45) ,
description varchar(45) ,
date varchar(45)
);

create table users_has_projects(
users_id int,
project_id int,
primary key (users_id, project_id),
foreign key (users_id) references users(id),
foreign key (project_id) references projects(id)
)