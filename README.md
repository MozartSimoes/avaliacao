# avaliacao
Efetuei todos os testes na mesma página com apenas um arquivo js externo. Todos estão funcionando na tela;
Para testar somente precisa baixar os dois arquivos na mesma pasta e abrir o html no browser;

Abaixo resultado da questão 6:

DECLARE @nasc as varchar(11)='17/04/2008';

DECLARE @Hoje DATETIME = GETDATE();

--calculo correto fazendo pelo dia de nascimento - 14
SELECT FLOOR(DATEDIFF(DAY, @nasc, @Hoje) / 365.25) as IDADE 

Gerei um print no arquivo anexo onde voces podem verificar o resultado no SQL Server
