-- Apagando a base de dados caso exista
drop database if exists DBAluno;

-- Criando a base de dados
create database	DBAluno;

-- Conectando a base de dados
use DBAluno;

-- Criando as tabelas
create table Aluno(
	IDAluno int not null 
    , Nome varchar(100)
    , Idade int
    , Rua varchar(100)
    , Numero int
	, Bairro varchar(100)
    , Cidade varchar(100)
	, Estado varchar(100)
    , Cep char(8)
    , Complemento varchar(100)
    , primary key (IDAluno)
);