SET SQL_SAFE_UPDATES = 0;

DROP DATABASE IF EXISTS DBCANTINA;
CREATE DATABASE DBCANTINA;

USE DBCANTINA;

CREATE TABLE CLIENTE (
	IDCLIENTE INT NOT NULL AUTO_INCREMENT
	, NOME VARCHAR(100)
	, SEXO CHAR(1)
	, PRIMARY KEY (IDCLIENTE)
);

CREATE TABLE PRODUTO (
	IDPRODUTO INT NOT NULL AUTO_INCREMENT
	, NOME VARCHAR(100)
	, PRECO NUMERIC(8,2)
	, CATEGORIA VARCHAR(50)
	, PRIMARY KEY (IDPRODUTO)
);

CREATE TABLE PEDIDO (
	IDPEDIDO INT NOT NULL AUTO_INCREMENT
	, IDCLIENTE INT NOT NULL
	, DTPEDIDO DATE
	, PRIMARY KEY(IDPEDIDO)
	, FOREIGN KEY (IDCLIENTE) REFERENCES CLIENTE (IDCLIENTE)
);

CREATE TABLE ITEM_PEDIDO (
	IDPEDIDO INT NOT NULL 
	, IDPRODUTO INT NOT NULL
	, QTDE INT
	, PRECO_UNITARIO NUMERIC(8,2)
	, PRIMARY KEY (IDPEDIDO, IDPRODUTO)
	, FOREIGN KEY (IDPEDIDO) REFERENCES PEDIDO (IDPEDIDO)
	, FOREIGN KEY (IDPRODUTO) REFERENCES PRODUTO (IDPRODUTO)
);

INSERT INTO CLIENTE (NOME, SEXO)VALUES('JOAO', 'M');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('MARIA', 'F');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('ANA', 'F');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('CARLOS', 'M');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('ANTONIO', 'M');

INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('BOLO DE CHOCOLATE', 2.5, 'DOCE');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('BOLO DE CENOURA', 2.5, 'DOCE');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('SUCO DE LARANJA', 3.0, 'SUCO');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('SUCO DE MORANGO', 4.0, 'SUCO');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('MISTO QUENTE', 1.5, 'SALGADO');

INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(3, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(5, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(3, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(5, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));

INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (01, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (02, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (03, 3, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (01, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (02, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (04, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (05, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (06, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (05, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (07, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (08, 3, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (12, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (10, 3, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (09, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (09, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (10, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (12, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (10, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (14, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (15, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (13, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (14, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (15, 3, RAND() * 10);

UPDATE ITEM_PEDIDO AS PED
SET PRECO_UNITARIO = (SELECT PRECO FROM PRODUTO WHERE IDPRODUTO = PED.IDPRODUTO);


-- Questao 1

select *
from
	Cliente
    inner join pedido on
    Pedido.IDCliente = Cliente.IDCliente;
    
-- Questao 2

select *
from
	ITEM_PEDIDO
    inner join PRODUTO on
    ITEM_PEDIDO.IDPRODUTO = PRODUTO.IDPRODUTO;
    
-- Questao 3

select *
from
	Pedido
    inner join ITEM_PEDIDO on
    ITEM_PEDIDO.IDPedido = Pedido.IDPedido;
    
-- Questao 4

select *
from
	Pedido
    inner join ITEM_PEDIDO on
    Pedido.IDPedido = ITEM_PEDIDO.IDPedido
    inner join PRODUTO on 
    ITEM_PEDIDO.IDPRODUTO = PRODUTO.IDPRODUTO;
    
-- Questao 5

select *
from
	cliente
    inner join pedido on 
    cliente.IDCliente = pedido.IDCliente
    inner join item_pedido on
    pedido.IDPedido = item_pedido.IDPedido;

-- Questao 6

select *
from
	cliente
    inner join pedido on 
    cliente.IDCliente = pedido.IDCliente
    inner join item_pedido on
    pedido.IDPedido = item_pedido.IDPedido
    inner join Produto on
    item_pedido.IDProduto = Produto.IDProduto;
    
-- Questao 7

select 
	produto.nome
    , produto.preco
from
	produto
order by
	produto.categoria
    , produto.nome;
    
    
-- Questao 8 

select 
	*
from
	pedido
where
	pedido.IDCliente = 3;


-- Questao 9

select
	Pedido.IDPedido
    , Pedido.DTPedido
    , Cliente.IDCliente
    , Cliente.nome
    , Produto.IDProduto
    , Produto.nome
    , Produto.preco
    , Item_pedido.PRECO_UNITARIO
    , Item_pedido.QTDE
    , (Item_pedido.PRECO_UNITARIO * Item_pedido.QTDE) AS Total
from
	cliente
    inner join pedido on 
    cliente.IDCliente = pedido.IDCliente
    inner join item_pedido on
    pedido.IDPedido = item_pedido.IDPedido
    inner join Produto on
    item_pedido.IDProduto = Produto.IDProduto
where 
	pedido.IDPedido = 10;
    