SET SQL_SAFE_UPDATES = 0;

DROP DATABASE IF EXISTS DBALUNO;

CREATE DATABASE DBALUNO;

USE DBALUNO;

CREATE TABLE ALUNO (
	IDALUNO INT NOT NULL AUTO_INCREMENT
	, NOME VARCHAR(20) NOT NULL
	, SEXO CHAR(1)
	, IDADE INT
	, CIDADE VARCHAR(20)
    , PRIMARY KEY (IDALUNO)
);

INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('ANDERSON', 17, 'M','PALHOCA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('CESAR', 21, 'M', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('DANIEL', 19, 'M', 'PALHOCA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('DIEGO', 19, 'M', 'BLUMENAU');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('EDUARDO', 20, 'M', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('GABRIEL', 19, 'M', 'TUBARAO');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('JOAO', 18, 'M', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('LEONARDO', 19, 'M', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('LUCAS', 20, 'M', 'BLUMENAU');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('PRISCILA', 19, 'F', 'PALHOÇA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('RENATA', 21, 'F', 'TUBARAO');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('MARIA', 22, 'F', 'BLUMENAU');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('TANIA', 19, 'F', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('CARLOS', 22, 'M', 'TUBARAO');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('JOSE', 19, 'M', 'PALHOCA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('MARISA', 19, 'F', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('AMANDA', 20, 'F', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('JOANA', 19, 'F', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('ALICE', 21, 'F', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('TADEU', 18, 'M', 'TUBARAO');


-- 1. Crie uma consulta SQL que liste a quantidade de alunos por sexo

    SELECT COUNT(IDALUNO), SEXO FROM ALUNO GROUP BY SEXO;

-- 2. Crie uma consulta SQL que liste a quantidade de alunos por idade, ordenado pela idade

	SELECT COUNT(IDALUNO), IDADE FROM ALUNO GROUP BY IDADE ORDER BY IDADE;
    
-- 3. Crie uma consulta SQL que liste a quantidade de alunos por cidades, apenas alunos que tenham cidade dadastradas devem participar da consulta.

	SELECT COUNT(IDALUNO), CIDADE FROM ALUNO WHERE CIDADE IS NOT NULL GROUP BY CIDADE;

-- 4. Crie uma consulta para listar a quantidade de alunos sem cidade cadastrada

	SELECT COUNT(IDALUNO) FROM ALUNO WHERE CIDADE IS NULL;

-- 5. Crie uma consulta SQL para listar a média de idade por sexo.

	SELECT AVG(IDADE), SEXO FROM ALUNO GROUP BY SEXO;

-- 6. Crie uma consulta SQL para listar a quantidade de alunos e a média de idade de todos os alunos da cidade de Florianopolis

	SELECT COUNT(IDALUNO), AVG(IDADE) FROM ALUNO WHERE CIDADE = 'FLORIANOPOLIS';

-- 7. Crie uma consulta SQL para listar a quantidade de alunos por sexo, apenas dos alunos que tenham idade diferente a 18 anos

	SELECT COUNT(IDALUNO), SEXO FROM ALUNO WHERE IDADE <> 18 GROUP BY SEXO;

-- 8. Crie uma consulta SQL para listar a menor idade dos alunos dos alunos de São Jose, com idade menor que 20 anos e do sexo masculino.

	SELECT MIN(IDADE) FROM ALUNO WHERE CIDADE = 'SAO JOSE' AND IDADE < 20 AND SEXO = 'M';

-- 9. Crie um consulta para listar a quantidade de alunos com mais de 18 para homens e 21 para mulheres

	SELECT COUNT(IDALUNO) FROM ALUNO WHERE (IDADE > 20 AND SEXO = 'F') OR (IDADE > 17 AND SEXO = 'M');

-- 10. Crie uma consulta sql para listar a maior e a menor idade dos alunos do sexo feminino 

	SELECT MAX(IDADE) AS MAIOR, MIN(IDADE) AS MENOR FROM ALUNO WHERE SEXO = 'F';

-- 11. Crie uma consulta SQL para soma a idade de todos os alunos da cidade de Blumenau

	SELECT SUM(IDADE) AS TOTAL_IDADE FROM ALUNO WHERE CIDADE = 'BLUMENAU';

-- 12. Crie uma consulta SQL para listar a quantidade de alunos com idade entre 15 e 18 anos que a cidade não seja Palhoça, agrupado por sexo.

	SELECT COUNT(IDALUNO), SEXO FROM ALUNO WHERE IDADE BETWEEN 15 AND 18 AND CIDADE <> 'PALHOCA' GROUP BY SEXO;

-- 13. Crie uma consulta SQL para listar as cidade que tenham mais de 3 alunos

	SELECT COUNT(IDALUNO), CIDADE FROM ALUNO WHERE CIDADE IS NOT NULL GROUP BY CIDADE HAVING COUNT(IDALUNO) > 3;

-- 14. Crie uma consulta SQL para listar a quantidade de alunos por idade, liste as idade de forma decrescente

	SELECT COUNT(IDALUNO), IDADE FROM ALUNO GROUP BY IDADE ORDER BY IDADE DESC;
    
-- 15. Crie uma consulta SQL que liste a quantidade de alunos, a média de idade, a maior idade e a menor idade agrupado por cidade desde
-- que a cidade tenha mais de 3 alunos.

	SELECT CIDADE, COUNT(IDALUNO), AVG(IDADE), MAX(IDADE), MIN(IDADE) FROM ALUNO GROUP BY CIDADE HAVING COUNT(IDALUNO) > 3;
    