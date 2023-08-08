drop database if exists dbexercicio17;

create database dbexercicio17;

use dbexercicio17;

create table Oficina (
	
	IDOficina int not null
    , Nome varchar(120) not null
    , Assunto varchar(300) not null
	, primary key (IDOficina)
);

create table Participante (
	
	IDParticipante int not null
    , Nome varchar(120) not null
    , E_Mail varchar(180) not null
	, primary key (IDParticipante)
);


create table Inscricao (
	
	IDInscricao int not null
    , DT_HRInscricao datetime not null
    , IDParticipante int not null
	, primary key (IDInscricao, IDParticipante)
    , foreign key (IDParticipante) references Participante(IDParticipante)
);

create table Nivel (
	
	IDNivel int not null
    , Nome varchar(100) not null
    , Valor varchar(20) not null
    , IDInscricao int not null
    , IDOficina int not null
	, primary key (IDNivel, IDInscricao, IDOficina)
    , foreign key (IDInscricao) references Inscricao(IDInscricao)
	, foreign key (IDOficina) references Oficina(IDOficina)
);