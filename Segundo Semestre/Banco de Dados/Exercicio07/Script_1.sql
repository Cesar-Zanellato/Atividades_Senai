-- Apagando o Base de dados caso exista
drop database if exists DBExercicio07_1;

-- Criando o Base de dados
create database DBExercicio07_1;

-- Conectando na Base de dados
use DBExercicio07_1;

-- Criando as tabelas 
create table Pessoa_Passaporte (
	IDPessoa int not null
    , Nome varchar(100) not null
    , IDPassaporte int not null
    , Numero varchar(45)
    , primary key (IDPessoa, IDPassaporte)
);