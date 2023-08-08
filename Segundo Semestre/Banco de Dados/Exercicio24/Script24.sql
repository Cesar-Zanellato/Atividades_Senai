set sql_safe_updates = 0;
DROP DATABASE IF EXISTS DBALUNO;
CREATE DATABASE DBALUNO;
USE DBALUNO;

CREATE TABLE ALUNO (
	IDALUNO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(20) NOT NULL,
	SEXO ENUM ('M', 'F'),
	IDADE int,
	CIDADE VARCHAR(20)
);


-- 1.	Crie os comandos SQL para inserir os dados informados na tabela 1.

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


-- Questão 1. Crie uma consulta SQL para listar os alunos do sexo masculino

	select * from aluno where sexo = 'M';

-- Questão 2. Crie uma consulta SQL para listar os alunos com 19 anos

	select * from aluno where idade = '19';

-- Questão 3. Crie uma consulta SQL para listar os alunos com a primeira letra do nome igual a 'D'

	select * from aluno where nome like 'D%';

-- Questão 4. Crie uma consulta SQL para listar os alunos com idade entre 20 e 22 anos

	select * from aluno where idade between 20 and 22;

-- Questão 5. Crie uma consulta SQL para listar os alunos sem cidade cadastrada

	select * from aluno where cidade is null;

-- Questão 6. Crie uma consulta SQL para listar os alunos que moram em Blumenau

	select * from aluno where cidade = 'Blumenau';

-- Questão 7. Crie uma consulta SQL para listar os alunos que com idade diferente a 18 anos:

	select * from aluno where idade <> 18;

-- Questão 8. Crie uma consulta SQL para listar os alunos com que tenham "Ri" em qualquer parte do nome

	select * from aluno where nome like '%Ri%';

-- Questão 9. Crie uma consulta SQL para listar os alunos de São José do sexo masculino com menos de 20 anos

	select * from aluno where cidade = 'SAO JOSE' and sexo = 'm' and idade < 20;

-- Questão 10. Crie uma consulta SQL para listar os alunos maiores de idade (idade acima de 20 para mulheres e idade acima de 17 para homens)

	select * from aluno where idade > 20 and sexo = 'F' or idade > 17 and sexo = 'M';
	
-- Questão 11. Crie uma consulta SQL para listar somente os alunos que tenham "A" e "R" no nome

	select * from aluno where nome like '%A%' and nome like '%R%';

-- Questão 12. Crie uma consulta SQL para listar somente o nome e idade dos alunos do sexo feminino

	select nome, idade from aluno where sexo = 'F';

-- Questão 13. Crie uma consulta SQL para listar somente o código e o nome dos alunos de Blumenau

	select IDALUNO, nome from aluno where cidade = 'Blumenau';

-- Questão 14. Crie uma consulta SQL para listar somente o nome e a cidade dos alunos que são menores de idade

	select nome, cidade from aluno where idade < 18;

-- Questão 15. Crie uma consulta SQL para listar somente o Nome e a cidade dos alunos com idade entre 15 e 18 anos que não moram em palhoça

	select nome, cidade from aluno where idade between 15 and 18 and cidade <> 'palhoca';

-- Questão 16. Crie uma consulta SQL para listar somente a cidade de todos os alunos que têm cidade cadastrada

	select cidade from aluno where cidade is not null;

-- Questão 17. Crie uma consulta SQL para listar somente o nome dos alunos com 18 anos que mora em palhoça ou 17 anos que mora em são José

	select nome from aluno where idade = '18' and cidade = 'palhoca' or idade = '17' and cidade = 'sao jose';

-- Questão 18. Crie uma consulta SQL para lista somente o nome dos alunos do sexo masculino moradores de tubarão com idade entre 18 e 25 anos

	select nome from aluno where sexo = 'm' and cidade = 'tubarao' and idade between 18 and 25;

-- Questão 19. Crie uma consulta SQL para liste somente o nome e a idade dos alunos, ordenado pela idade

	select nome, idade from aluno order by idade;

-- Questão 20. Crie uma consulta SQL para liste somente o código e o nome dos alunos, ordenado pelo nome de forma decrescente

	select idaluno, nome from aluno order by nome desc;
	
-- Questão 21. Crie uma consulta SQL para liste todos os dados dos alunos, ordenado pela idade de forma decrescente e depois pelo nome de forma crescente.

	select * from aluno order by idade desc, nome;

-- Questão 22. Crie uma consulta SQL para liste todos os dados dos alunos, ordenado pelo sexo e depois pelo nome

	select * from aluno order by sexo, nome;

-- Questão 23. Crie uma instrução SQL para alterar a idade do aluno 'Jose' para 20 anos

	update aluno set idade = 20 where nome = 'jose';
    select * from aluno;

-- Questão 24.Crie uma instrução SQL para alterar a idade dos alunos 'Tadeu', 'Cesar' e 'Marisa' para 21 anos

	update aluno set idade = 21 where nome in ('Tadeu', 'Cesar', 'Marisa');
    select * from aluno;

-- Questão 25.Crie uma instrução SQL para alterar o aluno cuja o código seja 12, mudando seu nome para "Luiz" a idade para "22" o sexo para "M" e a cidade para "Tijucas“;

	update aluno set nome = 'Luiz', idade = 22, sexo = 'M', cidade = 'Tijucas' where idaluno = 12;
	select * from aluno where idaluno = 12;

-- Questão 26. Crie uma instrução SQL apagar a cidade de todos os alunos acima de 24 anos;

	update aluno set cidade = null where idade > 24;
    select * from aluno; 

-- Questão 27. Crie uma instrução SQL remover os alunos que estão sem cidade;

	DELETE FROM aluno WHERE cidade is null;
	select * from aluno;

-- Questão 28.Crie uma instrução SQL remover os alunos que moram em tubarão e com mais de 15 anos do sexo masculino;

	DELETE FROM aluno WHERE cidade = 'tubarao' and idade > 15 and sexo = 'M';
    select * from aluno;

-- Questão 29. Crie uma instrução SQL remover os alunos "Tadeu", “Alice" "Maria" desde que tenham 19 anos

	delete from aluno where nome in ('Tadeu', 'Alice', 'Maria') and idade = 19;
    select * from aluno; 

-- Questão 30. Crie uma instrução SQL remover os alunos com menos de 18 anos para o sexo masculino e os alunos com menos de 21 do sexo feminino;

	delete from aluno where idade < 18 and sexo = 'M' or idade < 21 and sexo = 'F';
    select * from aluno; 