-- QUESTÃO 2
/*Escreva os comandos SQL para listar o QUIZ com IDQUIZ = 2, as perguntas que pertencem esse QUIZ e as opções de resposta.*/

select
	PERGUNTA.IDQUIZ
    , PERGUNTA.IDPERGUNTA
    , RESPOSTA.OPCAO_IDOPCAO
from
	PERGUNTA
    INNER JOIN RESPOSTA ON
    PERGUNTA.IDPERGUNTA = RESPOSTA.IDPERGUNTA
where
	IDQUIZ = 2;
    
    
-- QUESTAO 3
/*Escreva os comandos SQL para listar todas as participações, coloque o nome e o e-mail do
participante, a resposta escolhida, o enunciado da pergunta e o titulo e a descrição do QUIZ*/

SELECT 
	PARTICIPANTE.IDPARTICIPANTE
    , PARTICIPANTE.NOME
    , PARTICIPANTE.EMAIL
    , RESPOSTA.OPCAO_IDOPCAO
    , PERGUNTA.ENUNCIADO
    , QUIZ.TITULO
    , QUIZ.DESCRICAO
FROM 
	PARTICIPANTE
    INNER JOIN RESPOSTA ON 
    PARTICIPANTE.IDPARTICIPANTE = RESPOSTA.IDPARTICIPANTE
    INNER JOIN PERGUNTA ON
    RESPOSTA.IDPERGUNTA = PERGUNTA.IDPERGUNTA
    INNER JOIN QUIZ ON
    PERGUNTA.IDQUIZ = QUIZ.IDQUIZ;
    
-- QUESTÃO 4
/*Escreva os comandos SQL para listar somente as respostas certas, desde que o QUIZ seja do
tipo “T”. Liste o código da pergunta, o enunciado, e todos os dados da opção.*/

SELECT
	PERGUNTA.IDPERGUNTA
    , PERGUNTA.ENUNCIADO
    , OPCAO.IDOPCAO
    , OPCAO.TEXTO
    , OPCAO.CERTA
FROM
	QUIZ
    INNER JOIN PERGUNTA ON
    QUIZ.IDQUIZ = PERGUNTA.IDQUIZ
    INNER JOIN OPCAO ON 
    PERGUNTA.IDPERGUNTA = OPCAO.IDPERGUNTA
WHERE
	QUIZ.TIPO = 'T';

-- QUESTAO 5
/*Para verificar qual pergunta teve mais participação foi utilizada uma consulta SQL
que gerou o quadro abaixo, nesta tabela é listado o código da pergunta e a quantidade de
participantes que respondeu essa questão.*/

SELECT
	RESPOSTA.IDPERGUNTA
    , COUNT(RESPOSTA.IDPARTICIPANTE)
FROM
	RESPOSTA
GROUP BY
	RESPOSTA.IDPERGUNTA;


-- QUESTAO 6
/*Crie uma consulta SQL que liste o código identificador da matricula, o código
identificador da disciplina, o nome da disciplina, o código identificador do aluno, o
nome do aluno, o ano da matricula, o semestre da matricula e a situação da matricula. Liste
apenas as matriculas com ano igual a 2015 e semestre igual a 1.*/

SELECT 
	MATRICULA.IDMATRICULA
    , MATRICULA.IDDISCIPLINA
    , DISCIPLINA.NOME
    , MATRICULA.IDALUNO
    , ALUNO.NOME
    , MATRICULA.ANO
    , MATRICULA.SEMESTRE
    , MATRICULA.SITUACAO
FROM
	ALUNO 
    INNER JOIN MATRICULA ON 
    ALUNO.IDALUNO = MATRICULA.IDALUNO
    INNER JOIN DICIPLINA ON
    MATRICULA.IDDICIPLINA = DICIPLINA.IDDICIPLINA
WHERE
	MATRICULA.ANO = 2015 AND MATRICULA.SEMESTRE = 1;


-- QUESTAO 7
/*Crie uma consulta SQL que liste o código identificador do aluno, o nome do aluno, o
código identificador da disciplina, o nome da disciplina e a situação da matricula. Liste
apenas as matriculas com ano igual a 2015 e semestre igual a 2 e a disciplina
“ANTROPOLOGIA TEOLÓGICA”, ordenado pelo nome do aluno.*/

SELECT
	MATRICULA.IDALUNO
    , ALUNO.NOME
    , MATRICULA.IDDICIPLINA
    , DICIPLINA.NOME
    , MATRICULA.SITUACAO
FROM
	ALUNO 
    INNER JOIN MATRICULA ON 
    ALUNO.IDALUNO = MATRICULA.IDALUNO
    INNER JOIN DICIPLINA ON
    MATRICULA.IDDICIPLINA = DICIPLINA.IDDICIPLINA
WHERE
	MATRICULA.ANO = 2015 AND MATRICULA.SEMESTRE = 2 AND DICIPLINA.NOME = 'ANTROPOLOGIA TEOLÓGICA'
ORDER BY
	ALUNO.NOME;



-- QUESTAO 8
/*Crie uma consulta para listar a quantidade de matricula, quantidade de disciplinas,
quantidade de alunos, agrupado por ano, semestre e situação, conforme imagem abaixo:*/

SELECT
	MATRICULA.ANO
    , MATRICULA.SEMESTRE
    , MATRICULA.SITUACAO
	, COUNT(MATRICULA.IDMATRICULA)
    , COUNT(MATRICULA.IDDICIPLINA)
    , COUNT(MATRICULA.IDALUNO)
    
FROM
	MATRICULA
GROUP BY
	MATRICULA.ANO
    , MATRICULA.SEMESTRE
    , MATRICULA.SITUACAO;
	