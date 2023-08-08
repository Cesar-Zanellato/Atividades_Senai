-- Apagando a base de dados caso exista
drop database if exists DBHospede;

-- Criando a base de dados
create database	DBHospede;

-- Conectando a base de dados
use DBHospede;

-- Criando as tabelas
create table Hospede(
	IDHospede int not null 
    , Hotel_Rede varchar(50)
    , Hotel_MTUR int
    , Hotel_RazaoSocial varchar(200)
    , Hotel_CNPJ char(14)
	, Hotel_NomeFantasia varchar(200)
    , Hotel_Tipo varchar(100)
	, Hotel_Telefone varchar(13)
    , Hotel_Rua varchar(100)
    , Hotel_Numero int
    , Hotel_Complemento varchar(100)
	, Hotel_Bairro varchar(100)
    , Hotel_Cidade varchar(100)
    , Hotel_Estado char(2)
    , Hotel_Cep char(8)
    , Hospede_Nome varchar(120)
    , Hospede_Telefone varchar(13)
    , Hospede_Profissao varchar(100)
    , Hospede_Nacionalidade varchar(100)
    , Hospede_DTNascimento date
    , Hospede_Sexo char(1)
    , Hospede_CPF char(11)
    , Hospede_Documento_Numero int
    , Hospede_Documento_Tipo varchar(50)
    , Hospede_Documento_Orgao varchar(150)
    , Hospede_Residencia_Rua varchar(100)
    , Hospede_Residencia_Numero int
    , Hospede_Residencia_Complemento varchar(100)
    , Hospede_Residencia_Bairro varchar(100)
    , Hospede_Residencia_Cidade varchar(100)
    , Hospede_Residencia_Estado char(2)
    , Hospede_Residencia_CEP char(8)
    , Hospede_Residencia_Pais varchar(50)
    , Hospede_Procedencia_Pais varchar(50)
    , Hospede_Procedencia_Estado char(2)
    , Hospede_Procedencia_Cidade varchar(100)
    , Hospede_Destino_Pais varchar(50)
    , Hospede_Destino_Estado char(2)
    , Hospede_Destino_Cidade varchar(100)
    , Hospede_Motivo varchar(200)
    , Hospede_Transporte varchar(100)
    , Hospede_Acompanhante varchar(100)
    , Hospede_Entrada datetime
    , Hospede_Saida datetime
	, Hospede_UH varchar(10)
    , primary key (IDHospede)
);