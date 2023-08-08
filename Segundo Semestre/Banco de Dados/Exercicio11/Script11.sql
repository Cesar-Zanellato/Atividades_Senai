drop database if exists dbexercicio11;

create database dbexercicio11;

use dbexercicio11;

create table Video (
	IDVideo int not null
    , Titulo varchar(100) not null
    , Data_Publicacao date not null
    , Categoria varchar(45) not null
	, primary key (IDVideo)
);

create table Usuario ( 
	IDUsuario int not null
    , Nome varchar(120) not null
    , Login varchar(45) not null
    , Senha varchar(45) not null
    , Data_Cadastro date not null
	, primary key (IDUsuario)
);

create table Usuario_Video ( 
	IDUsuario int not null
    , IDVideo int not null
	, primary key (IDVideo, IDUsuario)
	, foreign key (IDVideo) references Video (IDVideo)
    , foreign key (IDUsuario) references Usuario (IDUsuario)
);