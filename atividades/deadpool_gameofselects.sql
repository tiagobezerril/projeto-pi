create database deadpool;

use deadpool;

create table deadpool (
idDeadpool int primary key auto_increment,
nome varchar(45),
stts varchar(45),
constraint chkStts check (stts in('vivo', 'morto'))
);

select * from deadpool;

insert into deadpool values
(default, 'Wade Wilson', 'vivo'),
(default, 'SkywalkerPool', 'morto'),
(default, 'DogPool', 'vivo'),
(default, 'LadyPool', 'vivo'),
(default, 'OldPool', 'vivo'),
(default, 'GitPool', 'vivo'),
(default, 'CatPool', 'vivo'),
(default, 'NicePool', 'morto'),
(default, 'BabyPool', 'morto'),
(default, 'LordPool', 'vivo');

create table arma (
idArma int primary key auto_increment,
nome varchar(45),
tipo varchar(45),
fkDeadpool int,
constraint fkArmaDeadpool
foreign key (fkDeadpool)
references deadpool (idDeadpool)
);

select * from arma;

insert into arma values
(default, 'Katana', 'Arma Branca', 1),
(default, 'AK-47', 'Arma de Fogo', 2),
(default, 'Pistola', 'Arma de Fogo', 5),
(default, 'Mjolnir', 'Arma Mágica', 7),
(default, 'Glock-30', 'Arma de Fogo', 10),
(default, 'Escalibur', 'Arma Mágica', 6),
(default, 'Manopla do Infinito', 'Arma Mágica', 3),
(default, 'Anel da Tropa dos Lanternas', 'Arma Mágica', 10),
(default, 'Cacetete', 'Arma Lendária', 8),
(default, 'Saco do Papai Noel', 'Arma Mágica', 4),
(default, 'Bexiga', 'Arma Comum', 1),
(default, 'Ossos', 'Arma Comum', 2),
(default, 'Canivete', 'Arma Branca', 4),
(default, 'Torta de Creme', 'Arma Culinária', 9),
(default, 'Unicórnio de Pelucia', 'Arma Mágica', 7);

create table KDA (
idKDA int auto_increment,
fkDeadpool int,
primary key (idKDA, fkDeadpool),
kills int,
deaths int,
assists int,
constraint fkKDADeadpool
foreign key (fkDeadpool)
references deadpool (idDeadpool)
);

select * from kda;

insert into KDA values
(default, 1, 10, 1, 4),
(default, 2, 7, 4, 1),
(default, 3, 11, 9, 0),
(default, 4, 1, 1, 10),
(default, 5, 5, 6, 2),
(default, 6, 20, 0, 9),
(default, 7, 3, 4, 1),
(default, 8, 14, 2, 0),
(default, 9, 17, 10, 2),
(default, 10, 35, 0, 10);

create table universo (
idUniverso int primary key auto_increment,
nome varchar(45),
caracteristica varchar(90)
);

select * from universo;

insert into universo values
(default, 'SPTechVerso', 'O tempo passa muito rápido'),
(default, 'LEGO', 'É feito de plástico'),
(default, 'Polo-Norte', 'É muito frio'),
(default, 'Terra Medieval', 'A cada dois minutos, você adquire uma doença'),
(default, 'Minecraft', 'O mundo é todo quadrado, e há monstros por perto');

create table viagem (
idViagem int auto_increment,
fkDeadpool int,
fkUniverso int,
primary key (idViagem, fkDeadpool, fkUniverso),
dtViagem date,
constraint fkViagemDeadpool
foreign key (fkDeadpool)
references deadpool (idDeadpool),
constraint fkViagemUniverso
foreign key (fkUniverso)
references universo (idUniverso)
);

INSERT INTO viagem VALUES
    (DEFAULT, 1, 1, '2024-01-11'),
    (DEFAULT, 2, 2, '2024-02-21'),
    (DEFAULT, 4, 4, '2024-04-01'),
    (DEFAULT, 5, 5, '2024-02-11'),
    (DEFAULT, 6, 1, '2024-06-01'),
    (DEFAULT, 7, 2, '2024-06-23'),
    (DEFAULT, 8, 3, '2024-08-01'),
    (DEFAULT, 9, 4, '2024-06-24'),
    (DEFAULT, 3, 2, '2025-02-03'),
    (DEFAULT, 10, 3, '2025-02-13'),
    (DEFAULT, 2, 4, '2025-03-28'),
    (DEFAULT, 1, 5, '2025-03-13');

create table luta(
fkDeadpool int,
fkBatalha int,
primary key (fkDeadpool, fkBatalha),
constraint fkDeadpoolLuta
foreign key (fkDeadpool)
references deadpool (idDeadpool),
constraint fkBatalhaLuta
foreign key (fkBatalha)
references batalha (idBatalha)
);

insert into luta values
()

create table batalha (
idBatalha int auto_increment,
fkUniverso int,
primary key (idBatalha, fkDeadpool, fkUniverso),
dtBatalha date,
constraint fkBatalhaDeadpool
foreign key (fkDeadpool)
references deadpool (idDeadpool),
constraint fkBatalhaUniverso
foreign key (fkUniverso)
references universo (idUniverso)
);

INSERT INTO batalha (idBatalha, fkDeadpool, fkUniverso, dtBatalha) VALUES
    (DEFAULT, 1, '2024-01-15'),
    (DEFAULT, 2, '2024-02-20'),
    (DEFAULT, 3, '2024-03-25'),
    (DEFAULT, 4, '2024-04-30'),
    (DEFAULT, 5, '2024-05-05'),
    (DEFAULT, 1, '2024-06-10'),
    (DEFAULT, 2, '2024-07-15'),
    (DEFAULT, 3, '2024-08-20'),
    (DEFAULT, 4, '2024-09-25'),
    (DEFAULT, 2, '2025-12-10'),
    (DEFAULT, 4, '2025-02-20'),
    (DEFAULT, 5, '2025-03-25');
    
-- QUESTÕES

-- mostre o nome, os deaths, kills e assists de cada deadpool - médio


-- mostre as batalhas da mais recente para a mais antiga - fácil

-- select * from batalha order by dtBatalha;

-- mostre todos os universos e suas características - fácil


-- mostre os universos que o nome termina com a letra O - fácil


-- mostre todas as armas que o tipo é 'arma branca' - fácil


-- mostre todas as armas ordenadas em ordem alfabética - fácil


-- mostre todas as armas que não pertencem a nenhum Deadpool - fácil


-- mostre o nome, status e a arma de cada deadpool - médio


-- mostre o nome e a quantidade de kills de cada deadpool em ordem decrescente - médio


-- mostre o universo e a quantidade de batalhas que aconteceram nele - médio

-- mostre a quantidade de viagens feitas por todos os deadpools em cada universo, o nome do Deadpool e o nome do universo - difícil
