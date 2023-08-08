drop database if exists dbexercicio15;

create database dbexercicio15;

use dbexercicio15;

create table Criminoso (
	IDCriminoso int not null
    , Nome varchar(160)	not null
    , DTNascimento date not null
    , primary key (IDCriminoso)
);

create table Vitima (
	IDVitima int not null
    , Nome varchar(160)	not null
    , DTNascimento date not null
    , primary key (IDVitima)
);

create table Crime (
	IDCrime int not null
    , Descricao varchar(1000) not null
    , DTCrime datetime not null
    , primary key (IDCrime)
);

create table Arma (
	IDArma int not null
    , Tipo varchar(45) not null
    , Identificacao varchar(45) not null
    , primary key (IDArma)
);

create table Cometer (
	IDCriminoso int not null
    , IDCrime int not null
    , primary key (IDCriminoso, IDCrime)
    , foreign key (IDCriminoso) references Criminoso(IDCriminoso)
    , foreign key (IDCrime) references Crime(IDCrime)
);

create table Atacar (
	IDCriminoso int not null
    , IDVitima int not null
    , primary key (IDCriminoso, IDVitima)
    , foreign key (IDCriminoso) references Criminoso(IDCriminoso)
    , foreign key (IDVitima) references Vitima(IDVitima)
);

create table Sofrer (
	IDVitima int not null
    , IDCrime int not null
    , primary key (IDVitima, IDCrime)
    , foreign key (IDVitima) references Vitima(IDVitima)
    , foreign key (IDCrime) references Crime(IDCrime)
);

create table Usar (
	IDArma int not null
    , IDCrime int not null
    , primary key (IDArma, IDCrime)
    , foreign key (IDArma) references Arma(IDArma)
    , foreign key (IDCrime) references Crime(IDCrime)
);