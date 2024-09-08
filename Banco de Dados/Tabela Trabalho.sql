CREATE DATABASE gas;

USE gas;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(40),
    nomeEmpresa VARCHAR(40),
    email VARCHAR(100),
    senha VARCHAR(80),
    CNPJ VARCHAR(14),
    telefone VARCHAR(11),
    logradouro VARCHAR(50)
);

INSERT INTO usuario VALUES 
(default, "Luciano da Silva", "Silva's Recipe", "silva.recipe@gmail.com", "s0R35489", "28401821105894","1199733245", "Avenida Juruna, 413"),
(default, "Roberto Mendes", "Good Flavour", "good.flavour@hotmail.com", "rgflv45432", "24861537945863", "1199861254", "Avenida São José, 243"),
(default, "Barbara de Azevedo", "Pan's", "pan.is.good@gmail.com", "bapans784523", "26489523145655", "1198546327", "Rua José de Alencar, 27"),
(default, "Jessica Cruz", "Cantinho Verde", "cantinhoverdeoficial@hotmail.com", "cantinhoverde8885462", "24569966157894", "1199785643", "Rua José Vinicius, 13"),
(default, "Bruno Wilson", "Sol", "sol.empresas@gmail.com","bwsol788955", "28788893326513", "1198565235", "Rua das Nações, 908"),
(default, "Diana de Lima", "Todos", "portodos@hotmail.com","dltod0s4548552","26598745563312", "1194956128", "Rua Camilo, 815");

SELECT * FROM usuario;

CREATE TABLE usogas (
    idGas INT PRIMARY KEY AUTO_INCREMENT,
    TipoCilindro VARCHAR(20),
    QtdCilindro FLOAT,
    NivelGasAtual FLOAT,   -- Nível atual de gás no ambiente
    EficienciaUso FLOAT, -- Eficiência do uso do gás
    CONSTRAINT chkCilindro CHECK (TipoCilindro IN ('P13', 'P20', 'P45', 'P90'))
);

INSERT INTO usogas VALUES
(default, 'P13', 13.0, 12.5, 95.5),
(default, 'P20', 20.0, 18.0, 90.0),
(default, 'P45', 45.0, 40.0,88.0),
(default, 'P90', 90.0, 85.0, 92.0),
(default, 'P13', 13.0, 11.5,80.0),
(default, 'P45', 45.0, 44.0, 98.0);

SELECT * FROM usogas;

CREATE TABLE historico_uso (
    idHistorico INT PRIMARY KEY AUTO_INCREMENT,
    DataRegistro DATE,
    idCilindro INT,
    QtdConsumida FLOAT
);

INSERT INTO historico_uso (idCilindro, DataRegistro, QtdConsumida) VALUES

(1, '2024-09-01', 0.5),
(2, '2024-09-02', 1.0),
(3, '2024-09-03', 2.0),
(4, '2024-09-04', 0.7),
(5, '2024-09-05', 1.2),
(6, '2024-09-06', 0.8);

SELECT * FROM historico_uso;
