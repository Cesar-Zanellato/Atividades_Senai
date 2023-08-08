drop database if exists dbexercicio07_2;

create database dbexercicio07_2;

use dbexercicio07_2;

create table Aluno (
	IDAluno int not null
    , Nome varchar(100) not null
    , primary key (IDAluno)
);

create table Pedido (
	IDPedido int not null
    , Produto varchar(45) not null
    , IDAluno int not null
    , primary key (IDPedido)
    , foreign key (IDAluno) references Aluno(IDAluno)
);