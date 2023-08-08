drop database if exists dbexercicio10;

create database dbexercicio10;

use dbexercicio10;

create table Pedido (
	IDPedido int not null
    , Cliente varchar(120) not null
    , Data_Pedido date not null
    , Hora time not null
	, primary key (IDPedido)
);

create table Produto ( 
	IDProduto int not null
    , Nome varchar(45) not null
    , Preco varchar(10) not null
	, primary key (IDProduto)
);

create table Pedido_Produto ( 
	IDProduto int not null
    , IDPedido int not null
	, primary key (IDProduto, IDPedido)
	, foreign key (IDProduto) references Produto (IDProduto)
    , foreign key (IDPedido) references Pedido (IDPedido)
);