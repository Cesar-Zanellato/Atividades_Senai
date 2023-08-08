-- Apagangando o banco de dados caso exista
drop database if exists dbexemplo01;

-- Criando o banco de dados
create database dbexemplo01;

-- Selecionar o banco criado
use dbexemplo01;

-- Criando as tabelas
create table pessoa (
	IDPessoa int not null auto_increment
    , Nome varchar(160) not null
    , Sexo char(1)
	, primary key (IDPessoa)

);

select * from pessoa;
insert into pessoa (Nome)
values ('Cesar');

select * from pessoa;
delete from pessoa where IDPessoa = 1;