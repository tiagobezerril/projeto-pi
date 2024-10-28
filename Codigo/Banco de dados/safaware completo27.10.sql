CREATE DATABASE safeware1;
use safeware1;
DROP DATABASE safaware1;


CREATE TABLE empresa (
  idCadastro INT PRIMARY KEY AUTO_INCREMENT,
  razao_social VARCHAR(120),
  nome_fantasia VARCHAR(60),
  cnpj CHAR(14),
  representante VARCHAR(45),
  e_mail VARCHAR(60),
  senha VARCHAR(45)
) AUTO_INCREMENT = 100;

INSERT INTO empresa VALUES
(default, 'Bella Alimentos Ltda', 'Bella Alimentos', '48967422000167', 'Marcos Antônio', 'marquin_bellaalimentos@outlook.com', 'Bella@Alimentos123'),
(default, 'La Na Cozinha Solucoes em Alimentos e Bebidas LTDA', 'La Na Cozinha', '34763320000115', 'Leandro Milan', 'leandromilan@gmail.com', 'leandroLNCS!23'),
(default, 'Renome Refeicoes Coletivas LTDA', 'Renome Refeicoes Coletivas', '04436006000167', 'Isabelle da Silva', 'adm@renomerefeicoes.com.br', 'renomeRef&2001'),
(default, 'Degustas Comercio de Alimentacao Corporativa LTDA', 'Degustas', '09720990000107', 'Michelly Miranda', 'financeiro@degustas.com.br', 'Degustas%%2008'),
(default, 'W.m. Iguarias LTDA', 'Suvide Restaurantes Empresariais', '56761836000163', 'Felipe Frata', 'wmiguarias@suvide.com.br', 'Suvida&iguarias86');

CREATE TABLE endereco (
  idendereco INT PRIMARY KEY AUTO_INCREMENT,
  Estado VARCHAR(45),
  cidade VARCHAR(45),
  bairro VARCHAR(45),
  logradouro VARCHAR(45),
  numero VARCHAR(7),
  cep CHAR(8),
  fkempresa INT,
  FOREIGN KEY (fkempresa) REFERENCES empresa(idCadastro)
) AUTO_INCREMENT = 1000;

INSERT INTO endereco VALUES
(default, 'SP', 'São Paulo', 'Vila Moraes', 'Rua Angaturama', '240', '04164010', '100'),
(default, 'SP', 'São Paulo', 'Vila Monumento', 'Rua Vasconcelos Drumond', '204', '01548000', '101'),
(default, 'SP', 'São Paulo', 'Agua Fria', 'Rua Ismael Neri', '764', '02335001', '102'),
(default, 'SP', 'São Paulo', 'City America', 'Avenida Do Anastacio', '359', '05119000', '103'),
(default, 'SP', 'São Paulo', 'Vila Carrao', 'Rua Antonio de Barros', '2831', '03401001', '104');

CREATE TABLE sensor (
  idsensor INT PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(7),
  dtinstalacao DATE,
  stts VARCHAR(7),
  local_inst VARCHAR(45),
  fkempresa INT,
  FOREIGN KEY (fkempresa) REFERENCES empresa(idCadastro),
  CONSTRAINT chkStts CHECK (stts IN ('ativo', 'inativo'))
) AUTO_INCREMENT = 2000;

INSERT INTO sensor VALUES
(default, 'MQ2', '2024-08-10', 'ativo', 'forno01', '100'),
(default, 'MQ2', '2024-08-10', 'ativo', 'forno02', '100'),
(default, 'MQ2', '2024-08-21', 'ativo', 'chapa01', '101'),
(default, 'MQ2', '2024-08-01', 'ativo', 'fritadeira01', '101'),
(default, 'MQ2', '2024-08-30', 'ativo', 'fogao01', '102'),
(default, 'MQ2', '2024-08-30', 'ativo', 'fogao02', '102'),
(default, 'MQ2', '2024-09-10', 'ativo', 'chapa01', '102'),
(default, 'MQ2', '2024-08-21', 'inativo', 'fritadeira02', '101'),
(default, 'MQ2', '2024-09-10', 'ativo', 'fogao01', '103'),
(default, 'MQ2', '2024-09-10', 'ativo', 'forno01', '104');

CREATE TABLE dados (
  idDados INT AUTO_INCREMENT,
  fksensor INT,
  PRIMARY KEY (idDados, fksensor),
  porcentagem FLOAT,
  dtdecoleta datetime default current_timestamp(),
  FOREIGN KEY (fksensor) REFERENCES sensor(idsensor)
) AUTO_INCREMENT = 3000;

SELECT razao_social as 'Razão Social',
nome_fantasia as 'Nome Fantasia',
cnpj as CNPJ
FROM empresa
WHERE razao_social LIKE '%LTDA%';

SELECT em.idCadastro as 'Id Empresa',
em.razao_social as 'Razão Social',
em.nome_fantasia as 'Nome Fantasia',
en.Estado,
  en.cidade AS Cidade,
  en.bairro as Bairro,
  en.logradouro as Logradouro,
  en.numero as Número,
  en.cep as CEP
FROM empresa as em 
JOIN endereco as en ON idCadastro = fkempresa;

SELECT 
  CONCAT(
    em.nome_fantasia, ' possui o sensor ', se.tipo, 
    ' instalado no local ', se.local_inst, 
    ', localizado em ', en.logradouro, ', ', en.numero, ', ', en.bairro, ', ', en.cidade, ', ', en.Estado, ' - CEP: ', en.cep
  ) AS 'Descrição Completa'
FROM empresa AS em
JOIN endereco AS en ON em.idCadastro = en.fkempresa
JOIN sensor AS se ON em.idCadastro = se.fkempresa;

SELECT 
  se.local_inst AS 'Local de Instalação',
  se.tipo AS 'Tipo de Sensor',
  se.stts AS 'Status Atual',
  CASE 
    WHEN se.stts = 'ativo' THEN 'Sensor em funcionamento'
    WHEN se.stts = 'inativo' THEN 'Sensor desligado'
    ELSE 'Status desconhecido'
  END AS 'Descrição do Status'
FROM sensor AS se;

SELECT 
  se.local_inst AS 'Local de Instalação',
  se.tipo AS 'Tipo de Sensor',
  IFNULL(se.stts, 'Status não definido') AS 'Status Atual',
  CASE 
    WHEN se.stts = 'ativo' THEN 'Sensor em funcionamento'
    WHEN se.stts = 'inativo' THEN 'Sensor desligado'
    ELSE 'Status desconhecido'
  END AS 'Descrição do Status'
FROM sensor AS se;
