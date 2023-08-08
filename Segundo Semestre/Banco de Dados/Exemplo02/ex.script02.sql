-- Apagando a base de dados caso exista
drop database if exists dbexemplo02;

-- Criando a base de dados
create database	dbexemplo02;

-- Conectando a base de dados
use dbexemplo02;

-- Criando as tabelas
create table Cliente(
	IDCliente int not null auto_increment
    , Nome varchar(120) not null
    , DTNascimento date
    , Telefone_Celular varchar(15) not null
    , Telefone_Residencial varchar(15)
    , Telefone_Comercial varchar(15)
    , Rua varchar(100)
    , Numero int
    , Complemento varchar(100)
    , Bairro varchar(100)
    , Cidade varchar(100)
    , Estado char(2)
    , CEP char(8)
    , primary key (IDCliente)
);