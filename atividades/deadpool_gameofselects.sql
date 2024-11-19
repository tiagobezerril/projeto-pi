create database deadpool;

use deadpool;

create table deadpool (
idDeadpool int primary key auto_increment,
nome varchar(45),
stts varchar(45),
constraint chkStts check (stts in('vivo', 'morto'))
);

insert into deadpool values
(default, 'Wade Wilson', 'vivo'),
(default, 'SkywalkerPool', 'vivo'),
(default, 'DogPool', 'vivo'),
(default, 'LadyPool', 'vivo'),
(default, 'OldPool', 'vivo'),
(default, 'GitPool', 'vivo'),
(default, 'CatPool', 'vivo'),
(default, 'NicePool', 'vivo'),
(default, 'BabyPool', 'vivo'),
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

insert into arma values
(default, 'Katana', 'Arma Branca', 1),
(default, 'AK-47', 'Arma de Fogo', null),
(default, 'Pistola', 'Arma de Fogo', null),
(default, 'Mjolnir', 'Arma Mágica', null),
(default, 'Glock-30', 'Arma de Fogo', 10),
(default, 'Escalibur', 'Arma Mágica', 6),
(default, 'Manopla do Infinito', 'Arma Mágica', null),
(default, 'Anel da Tropa dos Lanternas', 'Arma Mágica', null),
(default, 'Cacetete', 'Arma Lendária', null),
(default, 'Saco do Papai Noel', 'Arma Mágica', null),
(default, 'Bexiga', 'Arma Comum', null),
(default, 'Ossos', 'Arma Comum', null),
(default, 'Canivete', 'Arma Branca', null),
(default, 'Torta de Creme', 'Arma Culinária', null),
(default, 'Unicórnio de Pelucia', 'Arma Mágica', null);

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

INSERT INTO viagem (idViagem, fkDeadpool, fkUniverso, dtViagem) VALUES
    (DEFAULT, 1, 1, '2024-01-11'),
    (DEFAULT, 2, 2, '2024-02-21'),
    (DEFAULT, 4, 4, '2024-04-01'),
    (DEFAULT, 5, 5, '2024-02-11'),
    (DEFAULT, 6, 1, '2024-06-01'),
    (DEFAULT, 7, 2, '2024-06-23'),
    (DEFAULT, 8, 3, '2024-08-01'),
    (DEFAULT, 9, 4, '2024-06-24'),
    (DEFAULT, 12, 2, '2025-02-03'),
    (DEFAULT, 13, 3, '2025-02-13'),
    (DEFAULT, 14, 4, '2025-03-28'),
    (DEFAULT, 15, 5, '2025-03-13');


create table batalha (
idBatalha int auto_increment,
fkDeadpool int,
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
    (DEFAULT, 1, 1, '2024-01-15'),
    (DEFAULT, 2, 2, '2024-02-20'),
    (DEFAULT, 3, 3, '2024-03-25'),
    (DEFAULT, 4, 4, '2024-04-30'),
    (DEFAULT, 5, 5, '2024-05-05'),
    (DEFAULT, 6, 1, '2024-06-10'),
    (DEFAULT, 7, 2, '2024-07-15'),
    (DEFAULT, 8, 3, '2024-08-20'),
    (DEFAULT, 9, 4, '2024-09-25'),
    (DEFAULT, 12, 2, '2025-12-10'),
    (DEFAULT, 14, 4, '2025-02-20'),
    (DEFAULT, 15, 5, '2025-03-25');;
