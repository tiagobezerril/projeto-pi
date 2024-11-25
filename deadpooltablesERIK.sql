create database deadpool;
use deadpool;

-- Criação da tabela Universo
CREATE TABLE Universo (
    idUniverso INT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    caracteristica VARCHAR(90)
);

-- Criação da tabela Deadpool
CREATE TABLE Deadpool (
    idDeadpool INT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    status VARCHAR(45)
);

-- Criação da tabela Arma
CREATE TABLE Arma (
    idArma INT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    tipo VARCHAR(45),
    fkDeadpool INT,
    FOREIGN KEY (fkDeadpool) REFERENCES Deadpool(idDeadpool)
);

-- Criação da tabela KDA
CREATE TABLE KDA (
    idKDA INT PRIMARY KEY,
    fkDeadpool INT,
    Kills INT,
    Deaths INT,
    Assists INT,
    FOREIGN KEY (fkDeadpool) REFERENCES Deadpool(idDeadpool)
);

-- Criação da tabela Viagem
CREATE TABLE Viagem (
    idViagem INT PRIMARY KEY,
    fkDeadpool INT,
    fkUniverso INT,
    data DATE,
    FOREIGN KEY (fkDeadpool) REFERENCES Deadpool(idDeadpool),
    FOREIGN KEY (fkUniverso) REFERENCES Universo(idUniverso)
);

-- Criação da tabela Batalha
CREATE TABLE Batalha (
    idBatalha INT PRIMARY KEY,
    fkUniverso INT,
    fkDeadpool INT,
    data DATE,
    FOREIGN KEY (fkUniverso) REFERENCES Universo(idUniverso),
    FOREIGN KEY (fkDeadpool) REFERENCES Deadpool(idDeadpool)
);

-- mostre o nome, os deaths, kills e assists de cada deadpool - médio


-- mostre as batalhas da mais recente para a mais antiga - fácil


-- mostre todos os universos e suas características - fácil


-- mostre os universos que o nome termina com a letra O - fácil


-- mostre todas as armas que o tipo é 'arma branca' - fácil


-- mostre todas as armas ordenadas em ordem alfabética - fácil


-- mostre todas as armas que não pertencem a nenhum Deadpool - fácil


-- mostre o nome, status e a arma de cada deadpool - médio


-- mostre o nome e a quantidade de kills de cada deadpool em ordem decrescente - médio


-- mostre o universo e a quantidade de batalhas que aconteceram nele - médio
-- mostre a quantidade de viagens feitas por todos os deadpools em cada universo, o nome do Deadpool e o nome do universo - difícil


