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

insert into viagem values
(default, 1, 1, )
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
