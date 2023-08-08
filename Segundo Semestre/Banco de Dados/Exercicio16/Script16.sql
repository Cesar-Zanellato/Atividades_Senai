drop database if exists dbexercicio16;

create database dbexercicio16;

use dbexercicio16;

create table Funcionario (
	
	IDFuncionario int not null
    , Nome varchar(120) not null
    , DTAdimissao date not null
	, primary key (IDFuncionario)
);

create table Projeto (
	
	IDProjeto int not null
    , Titulo varchar(60) not null
    , DTInicio date not null
	, primary key (IDProjeto)
);


create table Cliente (
	
	IDCliente int not null
    , Nome varchar(120) not null
    , Telefone char(10) not null
    , IDProjeto int not null
	, primary key (IDCliente, IDProjeto)
    , foreign key (IDProjeto) references Projeto(IDProjeto)
);

create table Filial (
	
	IDFilial int not null
    , Nome varchar(150) not null
    , Telefone char(10) not null
    , IDProjeto int not null
    , IDCliente int not null
	, primary key (IDFilial, IDProjeto, IDCliente)
    , foreign key (IDProjeto) references Projeto(IDProjeto)
	, foreign key (IDCliente) references Cliente(IDCliente)
);

create table Trabalhar (
	
	IDFuncionario int not null
    , IDProjeto int not null
	, primary key (IDFuncionario, IDProjeto)
    , foreign key (IDFuncionario) references Funcionario(IDFuncionario)
	, foreign key (IDProjeto) references Projeto(IDProjeto)
);