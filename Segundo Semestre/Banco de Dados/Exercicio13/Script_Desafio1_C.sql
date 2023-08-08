drop database if exists dbdesafio1_C;

create database dbdesafio1_C;

use dbdesafio1_C;

create table Medico(
	IDMedico int not null
    , Nome_Medico varchar(45)
    , primary key (IDMedico)
);

create table Paciente(
	IDPaciente int not null
    , Nome_Pacienteo varchar(45)
    , primary key (IDPaciente)
);

create table Consulta(
	IDConsulta int not null
    , IDMedico int not null
    , IDPaciente int not null
    , DTConsulta datetime
    , primary key (IDMedico, IDPaciente, IDConsulta)
    , foreign key (IDMedico) references Medico(IDMedico)
    , foreign key (IDPaciente) references Paciente(IDPaciente)
);