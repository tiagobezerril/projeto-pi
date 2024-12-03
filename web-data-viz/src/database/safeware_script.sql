CREATE DATABASE safeware;
USE safeware;
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE restaurante (
  idCadastro INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
  razao_social VARCHAR(120) UNIQUE,
  nome_fantasia VARCHAR(60) UNIQUE,
  cnpj CHAR(18) UNIQUE
) AUTO_INCREMENT = 100;

INSERT INTO restaurante VALUES
(default, 'Bella Alimentos Ltda', 'Bella Alimentos', '48.967.422/0001-67'),
(default, 'La Na Cozinha Solucoes em Alimentos e Bebidas LTDA', 'La Na Cozinha', '34763320000115'),
(default, 'Renome Refeicoes Coletivas LTDA', 'Renome Refeicoes Coletivas', '04436006000167'),
(default, 'Degustas Comercio de Alimentacao Corporativa LTDA', 'Degustas', '09720990000107'),
(default, 'W.m. Iguarias LTDA', 'Suvide Restaurantes Empresariais', '56761836000163');

SELECT * FROM restaurante;
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE filial (
    idFilial INT AUTO_INCREMENT,
    fkRestaurante INT,
    PRIMARY KEY (idFilial, fkRestaurante),
    FOREIGN KEY (fkRestaurante)
        REFERENCES restaurante (idCadastro)
)  AUTO_INCREMENT=100;

SELECT * FROM filial;

INSERT INTO filial VALUES 
	(DEFAULT, 100),
    (DEFAULT, 100),
    (DEFAULT, 101),
    (DEFAULT, 102),
    (DEFAULT, 103),
    (DEFAULT, 104);
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(45),
    cidade VARCHAR(45),
    bairro VARCHAR(45),
    logradouro VARCHAR(45),
    numero VARCHAR(7),
    cep CHAR(8),
    fkFilial INT,
    CONSTRAINT fkFilialEnd FOREIGN KEY (fkFilial) REFERENCES filial(idFilial),
    fkRestaurante INT,
    FOREIGN KEY (fkRestaurante)
        REFERENCES filial (fkRestaurante)
)  AUTO_INCREMENT=1000;
SELECT * FROM filial;

INSERT INTO endereco VALUES
(default, 'SP', 'São Paulo', 'Vila Moraes', 'Rua Angaturama', '240', '04164010', '100', '100'),
(default, 'SP', 'São Paulo', 'Vila Monumento', 'Rua Vasconcelos Drumond', '206', '01548000', '101', '100'),
(default, 'SP', 'São Paulo', 'Vila Monumento', 'Rua Vasconcelos Drumond', '204', '01548000', '102', '101'),
(default, 'SP', 'São Paulo', 'Agua Fria', 'Rua Ismael Neri', '764', '02335001', '103', '102'),
(default, 'SP', 'São Paulo', 'City America', 'Avenida Do Anastacio', '359', '05119000', '104', '103'),
(default, 'SP', 'São Paulo', 'Vila Carrao', 'Rua Antonio de Barros', '2831', '03401001', '105', '104');
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(10),
    nome VARCHAR(120),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(45),
    fkRestaurante INT,
    fkSupervisor INT,
	CONSTRAINT chKTipo CHECK(tipo in ('Supervisor', 'Suporte', 'Comum')),
    FOREIGN KEY (fkRestaurante)
        REFERENCES restaurante (idCadastro),
    FOREIGN KEY (fkSupervisor)
        REFERENCES funcionario (idFuncionario)
)  AUTO_INCREMENT=100;

INSERT INTO funcionario (tipo, nome, email, senha, fkRestaurante) VALUES
	('Supervisor', 'Michel', 'michel@gmail.com', 'Senha#123', 100),
    ('Supervisor', 'Vanessa', 'vanessa@gmail.com', 'Senha#123', 101),
    ('Supervisor', 'Gabriela', 'gabriela@gmail.com', 'Senha#123', 102);
    
SELECT * FROM funcionario;

INSERT INTO funcionario (tipo, nome, email, senha, fkRestaurante, fkSupervisor) VALUES
	('Comum', 'Carlos', 'carlos@gmail.com', 'Senha#123', 100, 100),
    ('Comum', 'Roseli', 'roseli@gmail.com', 'Senha#123', 100, 100),
    ('Comum', 'Vitor', 'vitor@gmail.com', 'Senha#123', 101, 101),
    ('Comum', 'Luiz', 'luiz@gmail.com', 'Senha#123', 102, 102);

INSERT INTO funcionario (tipo, nome, email, senha) VALUES
	('Suporte', 'Viviane', 'viviane@gmail.com', 'Senha#123'),
	('Suporte', 'Bhreno', 'bhreno@gmail.com', 'Senha#123'),
	('Suporte', 'Kaio', 'kaio@gmail.com', 'Senha#123'),
	('Suporte', 'Tiago', 'tiago@gmail.com', 'Senha#123'),
	('Suporte', 'Erik', 'erik@gmail.com', 'Senha#123');
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(7),
    dtInstalacao DATE,
    stts VARCHAR(7) CHECK (stts IN ('ativo' , 'inativo')),
    local_inst VARCHAR(45),
    fkFilial INT,
    fkRestaurante INT,
    FOREIGN KEY (fkFilial)
        REFERENCES filial (idFilial),
	FOREIGN KEY (fkRestaurante)
        REFERENCES filial (fkRestaurante)
)  AUTO_INCREMENT=2000;

INSERT INTO sensor(tipo, dtInstalacao, stts, local_inst, fkFilial, fkRestaurante) VALUES 
	('MQ3','2024-11-10','ativo','Fogão 01',100, 100),
    ('MQ3','2024-11-10','ativo','Forno 01',100, 100),
    ('MQ3','2024-11-10','ativo','Cilindro 01',100, 100),
    ('MQ3','2024-11-15','ativo','Chapa 01',101, 100),
    ('MQ3','2024-11-15','ativo','Cilindro 01',101, 100);

SELECT * FROM sensor;
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE loginControle (
idLogin INT auto_increment,
fkFuncionario INT,
fkRestaurante INT,
PRIMARY KEY (idLogin, fkFuncionario, fkRestaurante),
CONSTRAINT fkFuncionarioLogin
FOREIGN KEY (fkFuncionario)
REFERENCES funcionario (idFuncionario),
CONSTRAINT fkRestauranteLogin
FOREIGN KEY (fkRestaurante)
REFERENCES restaurante (idCadastro)
);
select * from loginControle;
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE manutencao (
    idManutencao INT PRIMARY KEY AUTO_INCREMENT,
    dtHoraInicio DATETIME,
    dtHoraTermino DATETIME,
    fkSensor INT,
    FOREIGN KEY (fkSensor)
        REFERENCES sensor(idsensor)
)  AUTO_INCREMENT=2000;

INSERT INTO manutencao VALUES 
	(DEFAULT, '2024-11-16 07:09:09','2024-11-16 07:12:03',2002);

-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE dados (
    idDados INT PRIMARY KEY AUTO_INCREMENT,
    fkSensor INT,
    porcentagem FLOAT,
    dtColeta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fksensor)
        REFERENCES sensor(idsensor)
)  AUTO_INCREMENT=3000;

INSERT INTO dados(fkSensor, porcentagem, dtColeta) VALUES 
    (2000, 15, '2024-01-10 08:15:25'),
    (2000, 25, '2024-03-05 14:30:40'),
    (2000, 35, '2024-05-18 11:45:00'),
    (2000, 45, '2024-07-22 09:20:15'),
    (2000, 55, '2024-09-10 13:50:30'),
    (2000, 65, '2024-11-15 10:10:10'),
    (2000, 75, '2024-12-25 16:05:45'),
    (2000, 85, '2024-04-12 07:40:00'),
    (2000, 95, '2024-06-30 18:25:35');


-- Inserções para o sensor 2001
INSERT INTO dados(fkSensor, porcentagem, dtColeta) VALUES 
    (2001, 10, '2024-02-15 10:30:00'),
    (2001, 20, '2024-04-10 14:45:00'),
    (2001, 30, '2024-06-05 09:20:00'),
    (2001, 40, '2024-08-25 13:00:00'),
    (2001, 50, '2024-10-30 16:15:00');

-- Inserções para o sensor 2002
INSERT INTO dados(fkSensor, porcentagem, dtColeta) VALUES 
    (2002, 12, '2024-01-22 08:40:00'),
    (2002, 22, '2024-03-18 11:55:00'),
    (2002, 32, '2024-05-14 15:30:00'),
    (2002, 42, '2024-07-29 17:45:00'),
    (2002, 52, '2024-09-05 19:10:00');

-- Inserções para o sensor 2003
INSERT INTO dados(fkSensor, porcentagem, dtColeta) VALUES 
    (2003, 18, '2024-03-03 06:30:00'),
    (2003, 28, '2024-05-09 10:20:00'),
    (2003, 38, '2024-07-21 12:45:00'),
    (2003, 48, '2024-09-17 15:10:00'),
    (2003, 58, '2024-12-05 18:50:00');

-- Inserções para o sensor 2004
INSERT INTO dados(fkSensor, porcentagem, dtColeta) VALUES 
    (2004, 25, '2024-01-15 07:10:00'),
    (2004, 35, '2024-03-25 09:50:00'),
    (2004, 45, '2024-06-10 11:35:00'),
    (2004, 55, '2024-08-30 14:00:00'),
    (2004, 65, '2024-11-20 17:25:00');


-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-- DATE_FORMAT (`data`, '%d/%m/%Y' )
SELECT idFilial, CONCAT(e.logradouro, ', ', e.numero) AS endereco FROM filial JOIN endereco AS e ON fkFilial = idFilial WHERE filial.fkRestaurante = 100;
SELECT f.*, CONCAT(e.logradouro, ', ', e.numero) FROM filial AS f JOIN endereco AS e ON fkFilial = idFilial;

SELECT razao_social as 'Razão Social',
nome_fantasia as 'Nome Fantasia',
cnpj as CNPJ
FROM restaurante
WHERE razao_social LIKE '%LTDA%';


SELECT em.nome_fantasia as 'Nome Fantasia',
  en.Estado,
  en.cidade AS Cidade,
  en.bairro as Bairro,
  en.cep as CEP 
FROM restaurante as em 
JOIN endereco as en ON idCadastro = fkrestaurante;
-- COLOCAR JOIN DA FILIAL

SELECT 
  CONCAT(
    em.nome_fantasia, ' possui o sensor ', se.tipo, 
    ' instalado no local ', se.local_inst, 
    ', localizado em ', en.logradouro, ', ', en.numero, ', ', en.bairro, ', ', en.cidade, ', ', en.Estado, ' - CEP: ', en.cep
  ) AS 'Descrição Completa'
FROM empresa AS em
JOIN endereco AS en ON em.idCadastro = en.fkrestaurante
JOIN sensor AS se ON em.idCadastro = se.fkrestaurante;
-- JOIN DA FILIAL

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

select * from funcionario;