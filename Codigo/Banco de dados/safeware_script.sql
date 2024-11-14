CREATE DATABASE safeware;
USE safeware;

CREATE TABLE restaurante (
  idCadastro INT PRIMARY KEY AUTO_INCREMENT,
  razao_social VARCHAR(120),
  nome_fantasia VARCHAR(60),
  cnpj CHAR(14)
) AUTO_INCREMENT = 100;

INSERT INTO restaurante VALUES
(default, 'Bella Alimentos Ltda', 'Bella Alimentos', '48967422000167'),
(default, 'La Na Cozinha Solucoes em Alimentos e Bebidas LTDA', 'La Na Cozinha', '34763320000115'),
(default, 'Renome Refeicoes Coletivas LTDA', 'Renome Refeicoes Coletivas', '04436006000167'),
(default, 'Degustas Comercio de Alimentacao Corporativa LTDA', 'Degustas', '09720990000107'),
(default, 'W.m. Iguarias LTDA', 'Suvide Restaurantes Empresariais', '56761836000163');

CREATE TABLE endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    Estado VARCHAR(45),
    cidade VARCHAR(45),
    bairro VARCHAR(45),
    logradouro VARCHAR(45),
    numero VARCHAR(7),
    cep CHAR(8),
    fkrestaurante INT,
    FOREIGN KEY (fkrestaurante)
        REFERENCES restaurante (idCadastro)
)  AUTO_INCREMENT=1000;

INSERT INTO endereco VALUES
(default, 'SP', 'São Paulo', 'Vila Moraes', 'Rua Angaturama', '240', '04164010', '100'),
(default, 'SP', 'São Paulo', 'Vila Monumento', 'Rua Vasconcelos Drumond', '204', '01548000', '101'),
(default, 'SP', 'São Paulo', 'Agua Fria', 'Rua Ismael Neri', '764', '02335001', '102'),
(default, 'SP', 'São Paulo', 'City America', 'Avenida Do Anastacio', '359', '05119000', '103'),
(default, 'SP', 'São Paulo', 'Vila Carrao', 'Rua Antonio de Barros', '2831', '03401001', '104');

CREATE TABLE filial (
    idFilial INT PRIMARY KEY AUTO_INCREMENT,
    fkRestaurante INT,
    fkEndereco INT,
    FOREIGN KEY (fkRestaurante)
        REFERENCES restaurante (idCadastro),
    FOREIGN KEY (fkEndereco)
        REFERENCES endereco (idEndereco)
)  AUTO_INCREMENT=100;

CREATE TABLE funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(10),
    nome VARCHAR(120),
    email VARCHAR(60),
    senha VARCHAR(45),
    fkRestaurante INT,
    fkSupervisor INT,
	CONSTRAINT chKTipo CHECK(tipo in ('Supervisor', 'Suporte', 'Comum')),
    FOREIGN KEY (fkRestaurante)
        REFERENCES restaurante (idCadastro),
    FOREIGN KEY (fkSupervisor)
        REFERENCES funcionario (idFuncionario)
)  AUTO_INCREMENT=100;

CREATE TABLE sensor (
    idsensor INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(7),
    dtinstalacao DATE,
    stts VARCHAR(7) CHECK (stts IN ('ativo' , 'inativo')),
    local_inst VARCHAR(45),
    fkRestaurante INT,
    fkFilial INT,
    FOREIGN KEY (fkFilial)
        REFERENCES filial (idFilial),
    FOREIGN KEY (fkRestaurante)
        REFERENCES restaurante (idCadastro)
)  AUTO_INCREMENT=2000;


CREATE TABLE manutencao (
    idManutencao INT PRIMARY KEY AUTO_INCREMENT,
    dtHoraInicio DATETIME,
    dtHoraTermino DATETIME,
    stts VARCHAR(7) CHECK (stts IN ('ativo' , 'inativo')),
    fkRestaurante INT,
    fkSensor INT,
    FOREIGN KEY (fkSensor)
        REFERENCES sensor (idsensor)
)  AUTO_INCREMENT=2000;

CREATE TABLE dados (
    idDados INT PRIMARY KEY AUTO_INCREMENT,
    fksensor INT,
    porcentagem FLOAT,
    dtdecoleta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fksensor)
        REFERENCES sensor (idsensor)
)  AUTO_INCREMENT=3000;

SELECT razao_social as 'Razão Social',
nome_fantasia as 'Nome Fantasia',
cnpj as CNPJ
FROM empresa
WHERE razao_social LIKE '%LTDA%';

SELECT em.nome_fantasia as 'Nome Fantasia',
  en.Estado,
  en.cidade AS Cidade,
  en.bairro as Bairro,
  en.cep as CEP 
FROM restaurante as em 
JOIN endereco as en ON idCadastro = fkrestaurante;

SELECT 
  CONCAT(
    em.nome_fantasia, ' possui o sensor ', se.tipo, 
    ' instalado no local ', se.local_inst, 
    ', localizado em ', en.logradouro, ', ', en.numero, ', ', en.bairro, ', ', en.cidade, ', ', en.Estado, ' - CEP: ', en.cep
  ) AS 'Descrição Completa'
FROM empresa AS em
JOIN endereco AS en ON em.idCadastro = en.fkrestaurante
JOIN sensor AS se ON em.idCadastro = se.fkrestaurante;

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

