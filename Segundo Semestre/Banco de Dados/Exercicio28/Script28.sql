set sql_safe_updates = 0;

DROP DATABASE IF EXISTS DBEMPRESA;

CREATE DATABASE DBEMPRESA;

USE DBEMPRESA;

CREATE TABLE DEPARTAMENTO (
	IDDEPARTAMENTO INT NOT NULL PRIMARY KEY auto_increment,
	NOME VARCHAR(100)
);

INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(1, 'FINANCEIRO');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(2, 'COBRANÇA');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(3, 'CONTABILIDADE');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(4, 'AUDITORIA');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(5, 'LOGISTICA');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(6, 'PRODUÇÃO');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(7, 'OPERAÇÕES');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(8, 'RECURSOS HUMANOS');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(9, 'TI');
INSERT INTO DEPARTAMENTO (IDDEPARTAMENTO, NOME)VALUES(10, 'MARKETING');

CREATE TABLE FUNCAO (
	IDFUNCAO INT NOT NULL PRIMARY KEY auto_increment,
	NOME VARCHAR(100)
);

INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(1, 'ANALISTA ADMINISTRATIVO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(2, 'ANALISTA FINANCEIRO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(3, 'ANALISTA DE SISTEMAS');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(4, 'ANALISTA DE RECURSOS HUMANOS');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(5, 'ASSISTENTE DE MANUTENÇÃO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(6, 'ASSISTENTE ADMINISTRATIVO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(7, 'SECRETÁRIA');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(8, 'AUXILIAR ADMINISTRATIVO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(9, 'AUXILIAR DE PRODUÇÃO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(10, 'OPERADOR');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(11, 'ENCARREGADO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(12, 'PROGRAMADOR');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(13, 'PUBLICITARIO');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(14, 'DIAGRAMADOR');
INSERT INTO FUNCAO (IDFUNCAO, NOME)VALUES(15, 'JORNALISTA');

CREATE TABLE FUNCIONARIO (
	IDFUNCIONARIO INT NOT NULL PRIMARY KEY auto_increment,
	IDDEPARTAMENTO INT,
	IDFUNCAO INT,
	NOME VARCHAR(100),
	SEXO CHAR(1),
	IDADE INT,
	DTADMISSAO DATETIME NOT NULL,
	DTDEMISSAO DATETIME,
	SALARIO NUMERIC(9,2),
	CONSTRAINT FK_FUNCIONARIO_DEPARTAMENTO FOREIGN KEY (IDDEPARTAMENTO) REFERENCES DEPARTAMENTO (IDDEPARTAMENTO),
	CONSTRAINT FK_FUNCIONARIO_FUNCAO FOREIGN KEY (IDFUNCAO) REFERENCES FUNCAO (IDFUNCAO) 
);

INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(1,  2, 'Robert Pers'		, 'M', 19, '2012-01-16 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(1,  8, 'Roberto Garcam'	, 'M', 25, '2011-08-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(1,  8, 'Guilherme Maril'	, 'M', 25, '2012-02-17 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(1,  7, 'Aline Cristina'	, 'F', 19, '2000-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(2,  1, 'Jerônimo DalaSi'	, 'M', 26, '2012-01-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(2,  6, 'Thiago Ciello'		, 'M', 29, '2011-11-17 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(2,  7, 'Aline Batista'		, 'F', 19, '2001-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(3,  NULL, 'Lucas Logrini'		, 'M', 28, '2012-07-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(3,  6, 'Lucas Mellva'		, 'M', 29, '2012-08-18 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(3,  7, 'Beatriz AlVinO'	, 'F', 22, '2004-10-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  1, 'Roberto Adez'		, 'M', 26, '2012-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  6, 'Pedro Siues'		, 'M', 19, '2011-01-28 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  6, 'Nathan Sendil'		, 'M', 25, '2012-10-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  7, 'Gabriela Cristina'	, 'F', 30, '2012-05-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(5,  1, 'Paulo Cerasa'		, 'M', 22, '2002-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(5,  NULL, 'Lucas Olivio'		, 'M', 28, '2012-12-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(5,  6, 'João Viwerz'		, 'M', 19, '2011-08-13 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(3,  7, 'Beatriz AlVinO'	, 'F', 22, '2004-10-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  1, 'Roberto Adez'		, 'M', 26, '2012-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  6, 'Pedro Siues'		, 'M', 19, '2011-01-28 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  6, 'Nathan Sendil'		, 'M', 25, '2012-10-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(4,  7, 'Gabriela Cristina'	, 'F', 30, '2012-05-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL,  1, 'Paulo Cerasa'		, 'M', 22, '2002-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL,  6, 'Lucas Olivio'		, 'M', 28, '2012-12-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL,  6, 'João Viwerz'		, 'M', 19, '2011-08-13 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL,  7, 'Gabrielle Alenade'	, 'F', 25, '2012-11-13 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(6,  5, 'Matheus kamp'		, 'M', 30, '2012-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(6,  9, 'Matheus Lorb'		, 'M', 26, '2001-04-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(6, 10, 'Rhuan Rorti'		, 'M', 28, '2012-02-13 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(6, 10, 'Paulo Heqt'		, 'M', 19, '2002-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(6,  7, 'Victoria Cuehler'	, 'F', 27, '2012-12-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL,  6, 'João Saebr'		, 'M', 30, '2002-08-14 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL, 11, 'Lucas Furil'		, 'M', 22, '2001-03-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL, 10, 'Rhamon Rool'		, 'M', 31, '2012-07-14 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(NULL, 10, 'Matheus Moricensk'	, 'M', 19, '2002-08-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(8,  4, 'Rodrigo Livier'	, 'M', 22, '2012-03-16 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(8,  NULL, 'Guilherme Freder'	, 'M', 26, '2001-09-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(8,  NULL, 'Ricardo Rodess'	, 'M', 19, '2012-08-22 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(9,  3, 'Gabriel Aller'		, 'M', 27, '2010-05-12 14:00:00', 0000.00);
INSERT INTO FUNCIONARIO (IDDEPARTAMENTO, IDFUNCAO, NOME, SEXO, IDADE, DTADMISSAO, SALARIO)VALUES(9, 12, 'Breno BeieRosa'	, 'M', 19, '2012-08-26 14:00:00', 0000.00);

update funcionario set SALARIO = RAND() * 1000 * 2;
update funcionario set SALARIO =  SALARIO * 20 where SALARIO < 200;
update funcionario set SALARIO =  SALARIO * 10 where SALARIO < 100;
update funcionario set SALARIO =  SALARIO * 4 where SALARIO < 300;
update funcionario set SALARIO =  SALARIO * 2 where SALARIO < 700;


-- Questão 1

select
	funcionario.nome
    , DEPARTAMENTO.nome
from
	DEPARTAMENTO
    inner join funcionario on
    DEPARTAMENTO.IDDEPARTAMENTO = funcionario.IDDEPARTAMENTO
where
	DEPARTAMENTO.nome = "financeiro";
    
    
-- Questão 2
/*Crie uma consulta SQL para listar o código do funcionário, o
nome do funcionário, e o nome da função de todos os
funcionários que trabalham na função "assistente";
*/

select * from funcao;
select
	Funcionario.IDFuncionario
    , Funcionario.nome
    , Funcao.nome
from
	Funcao
    inner join funcionario on
    Funcao.IDFuncao = Funcao.IDFuncao
where
	Funcao.nome like 'assistente%';


-- Questão 3

select 
	Funcionario.nome
    , Funcionario.DTAdmissao
    , Funcionario.SALARIO
from
	Funcionario
where
	Funcionario.SALARIO > 1800;
    
-- Questão 4
/*Crie uma consulta SQL para listar o nome e o salario de todos
os funcionários do financeiro;
*/

select
	Funcionario.nome
    , Funcionario.salario
    , Departamento.nome
from
	DEPARTAMENTO
    inner join funcionario on
    DEPARTAMENTO.IDDEPARTAMENTO = funcionario.IDDEPARTAMENTO
where
	departamento.nome like 'financeiro';


-- Questão 5
/*Crie uma consulta SQL para listar o código do funcionário, o
nome do funcionário, o salario, o nome do departamento, e o
nome da função, de todos os funcionários;
*/

select
	Funcionario.IDFuncionario
    , Funcionario.Nome
    , Funcionario.Salario
    , Departamento.Nome
    , Funcao.Nome
from
	Departamento 
    inner join Funcionario on
    Departamento.IDDepartamento = Funcionario.IDDepartamento
    inner join Funcao on
    Funcionario.IDFuncao = Funcao.IDFuncao;


-- Questão 6
/*Crie uma consulta SQL para listar o maior salario, o menor
salario, agrupado por sexo;
*/

select
	max(Funcionario.Salario)
    , min(Funcionario.Salario)
    , Funcionario.Sexo
from
	Funcionario
group by
	Funcionario.Sexo;


-- Questão 7
/*Crie uma consulta SQL para listar a soma de todos os salario e
a média salarial agrupado por departamento, liste também o
código e o nome do departamento;
*/

select
	sum(Funcionario.salario)
    , avg(Funcionario.salario) 
    , Departamento.IDDepartamento
    , Departamento.nome  
from
	Departamento
    inner join Funcionario on
    Departamento.IDDepartamento = Funcionario.IDDepartamento
group by
	Departamento.IDDepartamento
    , Departamento.nome;



-- Questão 8
/*Crie uma consulta SQL para listar o salário de todos os
funcionário com mais de 1 ano de empresa, liste o nome do
funcionário, o salario do funcionário e o nome da função
exercida pelo funcionário;
*/

select
	Funcionario.Salario
    , Funcionario.DTAdmissao
    , Funcionario.Nome
    , Funcao.Nome as Funcao
from
	Funcao
    inner join Funcionario on
    Funcao.IDFuncao = Funcionario.IDFuncao
where 
	Funcionario.DTAdmissao < '2022-01-01 00:00:00';


-- Questão 9
/*Crie uma consulta SQL para listar a quantidade de funcionário
por departamento, o resultado deve ser ordenado pelo nome
do departamento;
*/

select
	Count(Funcionario.IDFuncionario)
    , Departamento.Nome
from
	Departamento 
    inner join Funcionario on 
    Departamento.IDDepartamento = Funcionario.IDDepartamento
group by
	Departamento.Nome
order by
	Departamento.Nome;


-- Questão 10
/*Crie uma consulta SQL para listar a soma dos salários dos
funcionários por função, listando também o maior e o menor
salario
*/

select
	Funcao.nome
	, sum(Funcionario.salario)
    , max(Funcionario.salario)
    , min(Funcionario.salario)
from
	Funcao
    inner join Funcionario on
    Funcao.IDFuncao = Funcionario.IDFuncao
group by
	Funcao.nome;


-- Questão 11
/*Crie uma consulta SQL para listar o nome da função, o sexo do
funcionário e a média do salário, o maior e o menor salario,
agrupado por função e sexo;
*/

select
	Funcao.nome
    , Funcionario.Sexo
    , avg(Funcionario.salario)
    , max(Funcionario.salario)
    , min(Funcionario.salario)
from 
	funcao
    inner join Funcionario on
    Funcao.IDFuncao = Funcionario.IDFuncao
group by
	Funcao.nome
    , Funcionario.Sexo;



-- Questão 12
/*Crie uma consulta SQL para listar o nome do departamento e a
quantidade de função diferentes exercidas pelos funcionários,
você pode usar a função “DISTINCT” dentro da função de
agregação para contar apenas as funções diferentes;
*/

select 
	Departamento.nome
    , count(distinct Funcao.IDFuncao)
from
	Departamento 
    inner join Funcionario on
    Departamento.IDDepartamento = Funcionario.IDDepartamento
    inner join Funcao on
    Funcionario.IDFuncao = Funcao.IDFuncao
group by
	Departamento.nome;

-- Questão 13
/*Crie uma consulta SQL para listar o nome do departamento e a
soma dos salários pagos aos funcionários do departamento,
desde que trabalhem na função de “assistente”. Liste apenas
os departamentos com a soma de salários acima de R$ 2.000;
*/

select
	Departamento.nome
    , sum(Funcionario.Salario)
from
	Departamento 
    inner join Funcionario on
    Departamento.IDDepartamento = Funcionario.IDDepartamento
    inner join Funcao on
    Funcionario.IDFuncao = Funcao.IDFuncao
where
	Funcao.nome like 'assistente%'
group by
	Departamento.nome
having
	 sum(Funcionario.Salario) > 2000 ;
    

-- Questão 14
/*Crie uma consulta SQL para listar o código identificador da
função e o nome do função que tenham mais de um
funcionário do sexo feminino trabalhando na função;
*/
/*
select
	Funcao.IDFuncao
    , Funcao.nome
    , Funcionario.Sexo
from
	Funcao
    inner join Funcionario on 
    Funcao.IDFuncao = Funcionario.IDFuncao
where
group by 
having
order by*/