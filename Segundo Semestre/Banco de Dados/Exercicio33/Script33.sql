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


delimiter $$

create procedure sp_gerarcompra(pValor numeric(8,2), pQTDE_parcela int, pDIA_Vencimento int)
begin 
	declare vIDCompra int;
    declare vParcela int default 1;
    declare vValorParcela numeric(8,2); 
    declare vVencimento date;
    declare vIDUltima_parcela int;
    declare valor_parcela numeric(8,2);
    

	insert into compra (valor_total, qtde_parcela, DT_Compra)values(pValor, qtde_parcela, now());
	
    set vIDCompra = last_insert_id();
    
    set vPArcela = 1;
    set vValorparcela = pValor / pQTDE_Parcela;
    set vVencimento = last_day(now());
    set vVencimento = date_add(vVencimento, interval pDIA_Vencimento day);
    
    while vParcela <= pQTDE_parcela do 
    
		insert into parcela (IDCompra, Numero, Valor, DT_Vencimento)
        values(vIDCompra, vParcela, pValorParcela, vVencimento);
        
        set vVencimento = date_add(vVencimento, interval 1 month);
        set vParcela = vParcela + 1;
	
    end while;
    
	select pValor - sum(valor), max(IDParcela)
    into vValor_diferenca, vIDUltima_Parcela
    from parcela
    where IDcompra= vIDcompra;
    
    update parcela
    set valor = valor + vValor_Diferenca
    where IDParcela = i;
end $$
delimiter ;


call sp_gerarcompra(130000, 360);

select * from compra;
select * from parcela;

