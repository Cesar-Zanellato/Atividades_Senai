drop database if exists dbexercicio08;

create database dbexercicio08;

use dbexercicio08;

create table Computador (
	IDComputador int not null
    , Modelo varchar(45) not null
    , Marca varchar(45) not null
	, primary key (IDComputador)
);

create table Chamado ( 
	IDChamado int not null
    , Data_Dia date not null
    , Hora time not null
    , Nome varchar(100) not null
    , Descricao_Problrma varchar(200) not null
    , IDComputador int not null
	, primary key (IDChamado)
	, foreign key (IDComputador) references Computador (IDComputador)
);