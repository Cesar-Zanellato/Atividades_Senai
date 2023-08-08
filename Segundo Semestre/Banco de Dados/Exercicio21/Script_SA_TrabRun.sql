drop database if exists dbTrabRunSA;

create database dbTrabRunSA;

use dbTrabRunSA;

create table Usuario (
	IDUsuario int not null
    , Nome varchar(160) not null
    , Nome_Usuario varchar(20) not null
	, Senha	varchar(16) not null
    , EMail varchar(200) not null
    , DT_Nascimento date not null
    , CPF char(11) not null
    , Avaliacao int not null
    , Premium char(1) not null
    , primary key (IDUsuario) 
);

create table Post_Empregador (
	IDPost_Empregador int not null
    , IDUsuario int not null
    , Tipo_Servico varchar(100)
    , Descricao varchar(500) not null
    , DT_Inicio date not null
	, Periodo_Matutino char(1)
    , Periodo_Vespertino char(1)
    , Periodo_Noturno char(1)
    , Endereco_Bairro varchar(150)
    , Endereco_Cidade varchar(100)
    , Endereco_Estado char(2)
    , primary key (IDPost_Empregador) 
    , foreign key (IDUsuario) references Usuario(IDUsuario)
);

create table Post_Trabalhador (
	IDPost_Trabalhador int not null
    , IDUsuario int not null
    , Tipo_Servico varchar(100)
    , Descricao varchar(500) not null
	, Periodo_Matutino char(1)
    , Periodo_Vespertino char(1)
    , Periodo_Noturno char(1)
    , Endereco_Bairro varchar(150)
    , Endereco_Cidade varchar(100)
    , Endereco_Estado char(2)
    , Taxa_Orcamento varchar(10)
    , primary key (IDPost_Trabalhador) 
    , foreign key (IDUsuario) references Usuario(IDUsuario)
);

create table Linkar (
	IDPost_Trabalhador int not null
    , IDPost_Empregador int not null
    , primary key (IDPost_Trabalhador, IDPost_Empregador) 
    , foreign key (IDPost_Trabalhador) references Post_Trabalhador(IDPost_Trabalhador)
    , foreign key (IDPost_Empregador) references Post_Empregador(IDPost_Empregador)
);

