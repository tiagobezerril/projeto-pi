CREATE DATABASE safeware;
use safeware;

-- Criando a tabela Empresa
CREATE TABLE Empresa (
  idCadastro INT PRIMARY KEY,
  razao_social VARCHAR(45),
  nome_fantasia VARCHAR(45),
  cnpj CHAR(14),
  representante VARCHAR(45),
  e_mail VARCHAR(45),
  senha VARCHAR(45)
);

-- Criando a tabela Endereco
CREATE TABLE Endereco (
  idendereco INT PRIMARY KEY,
  Estado VARCHAR(45),
  cidade VARCHAR(45),
  bairro VARCHAR(45),
  logradouro VARCHAR(45),
  numero CHAR(5),
  cep CHAR(8),
  fkempresa INT,
  FOREIGN KEY (fkempresa) REFERENCES Empresa(idCadastro)
);

-- Criando a tabela Sensor
CREATE TABLE Sensor (
  idsensor INT PRIMARY KEY,
  tipo VARCHAR(3),
  dtinstalacao DATE,
  status VARCHAR(11),
  fkempresa INT,
  FOREIGN KEY (fkempresa) REFERENCES Empresa(idCadastro)
);

-- Criando a tabela Dados
CREATE TABLE Dados (
  idDados INT,
  fksensor INT,
  PRIMARY KEY (idDados, fksensor),
  porcentagem INT,
  dtdecoleta datetime default current_timestamp(),
  
  FOREIGN KEY (fksensor) REFERENCES Sensor(idsensor)
);

