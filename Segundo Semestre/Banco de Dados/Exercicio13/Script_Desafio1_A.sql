drop database if exists dbdesafio1_A;

create database dbdesafio1_A;

use dbdesafio1_A;

create table Medico(
	IDMedico int not null
    , Nome_Medico varchar(45)
    , CRM int 
    , primary key (IDMedico)
);

create table Paciente(
	IDPaciente int not null
    , Nome_Pacienteo varchar(45)
    , primary key (IDPaciente)
);

create table Consulta(
	IDMedico int not null
    , IDPaciente int not null
    , primary key (IDMedico, IDPaciente)
    , foreign key (IDMedico) references Medico(IDMedico)
    , foreign key (IDPaciente) references Paciente(IDPaciente)
);