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
    , DTNascimento date
    , Celular_DDD int
    , Celular_Numero int
	, Residencial_DDD int
    , Residencial_Numero int
	, Contato_DDD int
    , Contato_Numero int
    , Contato_Nome varchar(100)
    , primary key (IDAluno)
);