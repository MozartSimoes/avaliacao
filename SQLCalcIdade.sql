DECLARE @nasc as varchar(11)='17/04/2008';

DECLARE @Hoje DATETIME = GETDATE();

SELECT FLOOR(DATEDIFF(DAY, @nasc, @Hoje) / 365.25) as IDADE -- retorna 21, idade correta
