CREATE DATABASE safeware;
use safeware;

CREATE TABLE Empresa (
  idCadastro INT PRIMARY KEY AUTO_INCREMENT,
  razao_social VARCHAR(120),
  nome_fantasia VARCHAR(60),
  cnpj CHAR(14),
  representante VARCHAR(45),
  e_mail VARCHAR(60),
  senha VARCHAR(45)
) AUTO_INCREMENT = 100
;

INSERT INTO Empresa VALUES
(default, 'Bella Alimentos Ltda', 'Bella Alimentos', '48967422000167', 'Marcos Antônio', 'marquin_bellaalimentos@outlook.com', 'Bella@Alimentos123'),
(default, 'La Na Cozinha Solucoes em Alimentos e Bebidas LTDA', 'La Na Cozinha', '34763320000115', 'Leandro Milan', 'leandromilan@gmail.com', 'leandroLNCS!23'),
(default, 'Renome Refeicoes Coletivas LTDA', 'Renome Refeicoes Coletivas', '04436006000167', 'Isabelle da Silva', 'adm@renomerefeicoes.com.br', 'renomeRef&2001'),
(default, 'Degustas Comercio de Alimentacao Corporativa LTDA', 'Degustas', '09720990000107', 'Michelly Miranda', 'financeiro@degustas.com.br', 'Degustas%%2008'),
(default, 'W.m. Iguarias LTDA', 'Suvide Restaurantes Empresariais', '56761836000163', 'Felipe Frata', 'wmiguarias@suvide.com.br', 'Suvida&iguarias86');

CREATE TABLE Endereco (
  idendereco INT PRIMARY KEY AUTO_INCREMENT,
  Estado VARCHAR(45),
  cidade VARCHAR(45),
  bairro VARCHAR(45),
  logradouro VARCHAR(45),
  numero VARCHAR(7),
  cep CHAR(8),
  fkempresa INT,
  FOREIGN KEY (fkempresa) REFERENCES Empresa(idCadastro)
) AUTO_INCREMENT = 1000
;

INSERT INTO Endereco VALUES
(default, 'SP', 'São Paulo', 'Vila Moraes', 'Rua Angaturama', '240', '04164010', '100'),
(default, 'SP', 'São Paulo', 'Vila Monumento', 'Rua Vasconcelos Drumond', '204', '01548000', '101'),
(default, 'SP', 'São Paulo', 'Agua Fria', 'Rua Ismael Neri', '764', '02335001', '102'),
(default, 'SP', 'São Paulo', 'City America', 'Avenida Do Anastacio', '359', '05119000', '103'),
(default, 'SP', 'São Paulo', 'Vila Carrao', 'Rua Antonio de Barros', '2831', '03401001', '104');

CREATE TABLE Sensor (
  idsensor INT PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(7),
  dtinstalacao DATE,
  stts VARCHAR(7),
  local_inst VARCHAR(45),
  fkempresa INT,
  FOREIGN KEY (fkempresa) REFERENCES Empresa(idCadastro),
  CONSTRAINT chkStts CHECK (stts IN ('ativo', 'inativo'))
) AUTO_INCREMENT = 2000
;

INSERT INTO Sensor VALUES
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

CREATE TABLE Dados (
  idDados INT AUTO_INCREMENT,
  fksensor INT,
  PRIMARY KEY (idDados, fksensor),
  porcentagem FLOAT,
  dtdecoleta datetime default current_timestamp(),
  FOREIGN KEY (fksensor) REFERENCES Sensor(idsensor)
) AUTO_INCREMENT = 3000
;

CREATE USER 'safe'@'localhost' IDENTIFIED BY 'URUBU100';

GRANT INSERT ON safeware.Dados TO 'safe'@'localhost';
FLUSH PRIVILEGES;

alter table dados modify column fksensor int primary key auto_increment;

select * from dados; 
    
    drop table dados;
