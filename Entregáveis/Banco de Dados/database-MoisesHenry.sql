CREATE DATABASE dbMvg;
USE dbMvg;

-- Tabela da empresa
CREATE TABLE empresa (
	id INT AUTO_INCREMENT PRIMARY KEY,
    cnpj CHAR(14) NOT NULL,
    nome VARCHAR(60),
	cep CHAR(8),
    logra VARCHAR(100),
    num INT,
    telefone CHAR(11) NOT NULL
);

-- Tabela da usuario/funcionario da empresa
CREATE TABLE usuario (
	id INT AUTO_INCREMENT PRIMARY KEY,
    cpf CHAR(11) NOT NULL,
    nome VARCHAR(60),
    email VARCHAR(80) NOT NULL,
	telefone CHAR(11) NOT NULL,
    dtNascimento DATE,
    idEmpresa INT
);

-- Tabela do sensor
CREATE TABLE sensor (
	id INT AUTO_INCREMENT PRIMARY KEY,
    localizacao VARCHAR(100),
    dataInstalacao DATE,
    idEmpresa INT
);

-- Tabela dos dados que vem do sensor
CREATE TABLE monitoramento (
	id INT AUTO_INCREMENT PRIMARY KEY,
    porcentagem FLOAT(5,2),
    dtHoraVazamento DATETIME,
    idSensor INT
);

-- Tabela de administrador
CREATE TABLE adm (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60),
    email VARCHAR(80) NOT NULL,
    senha VARCHAR(20) NOT NULL
);

INSERT INTO adm (nome, email, senha) VALUES
	('Felipe Calace', 'felipe@sptech.school', 'Felipinho123'),
    ('Tiaog Bezerril', 'tiago@sptech.school', '12345678');
    
INSERT INTO empresa (cnpj, nome, cep, logra, num, telefone) VALUES
	('12345678000190', 'Restaurante Sabores', '12345678', 'Rua das Flores', 101, '11999998888'),
    ('98765432000199', 'Cozinha Gourmet', '87654321', 'Avenida Central', 202, '11988887777'),
    ('11223344000155', 'Churrascaria do Tio', '11223344', 'Rua Oliveira', 303, '11977776666'),
    ('33445566000177', 'Restaurante Delícia', '33445566', 'Avenida das Palmeiras', 505, '11955554444'),
    ('44556677000188', 'Bistrô Elegância', '44556677', 'Rua dos Pinheiros', 606, '11944443333');
    
INSERT INTO usuario (cpf, nome, email, telefone, dtNascimento, idEmpresa) VALUES 
	('12345678901', 'João Silva', 'joao.silva@email.com', '11999998888', '1990-05-14', 1),
	('98765432100', 'Maria Oliveira', 'maria.oliveira@email.com', '11988887777', '1985-08-20', 2),
    ('11122233344', 'Carlos Lima', 'carlos.lima@email.com', '11977776666', '1992-12-30', 3),
    ('55566677788', 'Ana Souza', 'ana.souza@email.com', '11966665555', '1988-03-10', 4),
    ('99988877766', 'Lucas Pereira', 'lucas.pereira@email.com', '11955554444', '1995-07-07', 5),
    ('22233344455', 'Mariana Ribeiro', 'mariana.ribeiro@email.com', '11944443333', '1993-02-25', 6),
    ('66655544433', 'Paulo Santos', 'paulo.santos@email.com', '11933332222', '1987-11-14', 7),
    ('33344455566', 'Fernanda Alves', 'fernanda.alves@email.com', '11922221111', '1991-01-18', 1),
    ('44455566677', 'Rodrigo Costa', 'rodrigo.costa@email.com', '11911112222', '1996-09-05', 2),
    ('55566677799', 'Beatriz Martins', 'beatriz.martins@email.com', '11900001111', '1998-06-21', 1);
    
INSERT INTO sensor (localizacao, dataInstalacao, idEmpresa) VALUES
	('Cozinha Principal', '2023-08-08', 1),
    ('Depósito de Gás', '2023-11-07', 2),
    ('Cozinha Secundária', '2023-12-12', 4),
    ('Cozinha Principal', '2024-05-21', 3),
    ('Depósito de Gás', '2024-06-15', 1),
    ('Cozinha Secundária', '2024-08-12', 5);
    
INSERT INTO monitoramento (porcentagem, dtHoraVazamento, idSensor) VALUES
	(12.50, '2023-08-27 14:35:20', 1),
	(45.75, '2023-12-25 08:20:15', 2),
	(78.90, '2023-12-30 18:05:30', 3),
	(10.20, '2024-05-23 12:50:10', 4),
	(90.45, '2024-06-14 23:40:55', 5),
	(34.60, '2024-06-27 16:30:40', 6),
	(25.30, '2024-07-11 10:45:25', 3),
	(50.80, '2024-07-17 07:15:50', 6),
	(65.25, '2024-08-18 22:10:05', 5),
	(12.00, '2024-09-03 15:25:35', 2);
    
SELECT
	id AS 'ID',
	nome AS 'Empresa',
	cnpj AS 'CNPJ',
    cep AS 'CEP',
    logra AS 'Logradouro',
    num AS 'Número',
    telefone AS 'Telefone'
FROM empresa;
    
SELECT 
	id AS 'ID',
    idEmpresa AS 'Empresa',
	nome AS 'Nome do Funcionario',
	cpf AS 'CPF',
    email AS 'Email',
    telefone AS 'Telefone',
    dtNascimento AS 'Data de nascimento'
FROM usuario;

SELECT
	id AS 'ID',
    idEmpresa AS 'Empresa',
	localizacao AS 'Localização do sensor',
    dataInstalacao AS 'Data de instalação'
FROM sensor ORDER BY dataInstalacao DESC;

SELECT
	id AS 'ID',
    idSensor AS 'Sensor',
    porcentagem AS 'Porcentagem detectada',
    dtHoraVazamento AS 'Data do registro'
FROM monitoramento ORDER BY dtHoraVazamento DESC;
	