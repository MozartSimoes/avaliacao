DECLARE @nasc as varchar(11)='17/04/2008';

DECLARE @Hoje DATETIME = GETDATE();

--calculo correto fazendo pelo dia de nascimento - 14
SELECT FLOOR(DATEDIFF(DAY, @nasc, @Hoje) / 365.25) as IDADE 
