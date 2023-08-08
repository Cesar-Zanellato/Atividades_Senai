drop database if exists dbexercicio09;

create database dbexercicio09;

use dbexercicio09;

create table Documento_Veiculo (
	IDDocumento int not null
    , Renavan char(11)
    , Estado_Registro char(2)
    , Cidade_Registro varchar(120)
    , DTRegistro date 
    , IDVeiculo	int not null
    , Ano_Fabricacao date
    , Marca	varchar(60)
    , Modelo varchar(60)
    , Placa_Veiculo char(7)
    , primary key (IDDocumento, IDVeiculo)
);