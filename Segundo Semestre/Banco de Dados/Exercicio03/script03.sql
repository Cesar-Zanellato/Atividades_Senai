-- Apagando a base de dados caso exista
drop database if exists DBEstacionamento;

-- Criando a base de dados
create database	DBEstacionamento;

-- Conectando a base de dados
use DBEstacionamento;

-- Criando as tabelas
create table Carro(
	IDCarro int not null auto_increment
    , Placa varchar(7) not null
    , Marca varchar(100)
    , Modelo varchar(100)
    , Ano_Fabricacao date
    , Ano_Modelo date
    , Cor varchar(100)
    , Numero_Chassi varchar(17) not null
    , primary key (IDCarro)
);