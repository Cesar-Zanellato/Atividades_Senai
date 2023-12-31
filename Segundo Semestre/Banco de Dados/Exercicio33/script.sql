DROP DATABASE IF EXISTS DBCOMPRAPARCELADA;
CREATE DATABASE DBCOMPRAPARCELADA;
USE DBCOMPRAPARCELADA;

CREATE TABLE COMPRA (
	IDCOMPRA INT NOT NULL AUTO_INCREMENT	, DTCOMPRA DATE
	, VALOR_TOTAL NUMERIC(8,2)
	, QTDE_PARCELA INT
	, DT_COMPRA DATE
    	, PRIMARY KEY (IDCOMPRA)
);

CREATE TABLE PARCELA(
	IDPARCELA INT NOT NULL AUTO_INCREMENT
    	, IDCOMPRA INT NOT NULL
    	, NUMERO INT
    	, DT_VENCIMENTO DATE
    	, VALOR NUMERIC(8,2)
    	, PRIMARY KEY (IDPARCELA)
    	, FOREIGN KEY (IDCOMPRA) REFERENCES COMPRA (IDCOMPRA)
);

