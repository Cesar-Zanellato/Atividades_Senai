drop database if exists dbexercicio07_3;

create database dbexercicio07_3;

use dbexercicio07_3;

create table Aluno ( 
	IDAluno int not null
    , Nome varchar(100) not null
    , Idade int not null
    , primary key (IDAluno)
);

create table Produto (
	IDProduto int not null
    , Nome_Produto varchar(100) not null
    , primary key (IDProduto)
);

create table Aluno_Produto (
	IDAluno int not null
    , IDProduto int not null
    , primary key (IDAluno, IDProduto)
    , foreign key (IDALuno) references Aluno(IDAluno)
    , foreign key (IDProduto) references Produto(IDProduto)
);