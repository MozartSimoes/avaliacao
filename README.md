# avaliacao
Efetuei todos os testes na mesma página com apenas um arquivo js externo. Todos estão funcionando na tela;

Abaixo resultado da questão 6:

DECLARE @nasc as varchar(11)='17/04/2008';

DECLARE @Hoje DATETIME = GETDATE();

SELECT FLOOR(DATEDIFF(DAY, @nasc, @Hoje) / 365.25) as IDADE -- retorna 21, idade correta

Gerei um print no arquivo anexo onde voces podem verificar o resultado no SQL Server
