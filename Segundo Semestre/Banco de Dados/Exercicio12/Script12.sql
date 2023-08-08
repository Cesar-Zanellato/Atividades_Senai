drop database if exists exercicio12;

create database exercicio12;

use exercicio12;

create table Rede(
IdRede int not null
,Nome_Departamento varchar(100) not null
,Ramau varchar(60)
,primary key (IdRede)
);
create table Departamento(
IdDepartamento int not null
,Nome_Responsavel varchar(100) not null
,Ramau varchar(60)
,primary key (IdDepartamento)
);
create table Computador(
IdComputador int not null
,IdDepartamento int not null
,IdRede int not null
,Numero_indentificacao int not null
,Modelo varchar(60)not null
,Fabricante varchar(100)not null
,primary key (IdComputador)
,foreign key(IdRede) references Rede(IdRede)
,foreign key(IdDepartamento) references Departamento(IdDepartamento)
);