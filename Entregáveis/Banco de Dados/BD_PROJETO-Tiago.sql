create database Login;
use Login;

create table login (
id int primary key auto_increment,
nome varchar(40),
sobrenome varchar(40),
cpf varchar (12),
dtnascimento date,
segmento varchar (40),
numCelular varchar (12),
numFixo varchar (10),
email varchar(50)
);

desc login;

alter table login modify column cpf varchar (12);

INSERT INTO login VALUES (
	default,
    'Ana',
    'Costa',
    12345678922,
    '1985-10-05',
    'Marketing',
    '11987654321',
    '1134567890',
    'ana.costa@example.com'
);

INSERT INTO login VALUES (
    default,
    'Carlos',
    'Silva',
    98765432122,
    '1990-02-20',
    'Finanças',
    '21987654321',
    '2123456789',
    'carlos.silva@example.com'
);

INSERT INTO login VALUES (
	default,
    'Mariana',
    'Oliveira',
    19283746522,
    '1988-11-15',
    'Recursos Humanos',
    '31987654321',
    '3134567890',
    'mariana.oliveira@example.com'
);

INSERT INTO login VALUES (
    default,
    'Roberto',
    'Pereira',
    56473829122,
    '1975-06-25',
    'Vendas',
    '41987654321',
    '4134567890',
    'roberto.pereira@example.com'
);

INSERT INTO login VALUES (
    default,
	'Juliana',
    'Lima',
    10293847522,
    '1992-12-01',
    'Tecnologia',
    '51987654321',
    '5134567890',
    'juliana.lima@example.com'
);

INSERT INTO login VALUES (
    default,
    'Felipe',
    'Almeida',
    84736251422,
    '1983-09-17',
    'Jurídico',
    '62987654321',
    '6234567890',
    'felipe.almeida@example.com'
);

select * from login;


CREATE DATABASE BDsensor;
USE BDsensor;

CREATE TABLE BDsensor (
id int primary key auto_increment,
gasporcto float
);

INSERT INTO BDsensor VALUE 
	(DEFAULT,100);
    
SELECT * FROM BDsensor;

TRUNCATE BDsensor;
DROP DATABASE bdsensor;

CREATE DATABASE ValoresDaColetaDeDado;
USE ValoresDaColetaDeDado;

CREATE TABLE valores (
id int primary key auto_increment,
cosumogas_kg_dia float,
perdagasemporcento float,
preçodobotijão float
);

INSERT INTO valores VALUE
	(default,13,69,120);


SELECT * FROM valores;

ALTER TABLE valores RENAME COLUMN cosumogas_kg_dia TO ConsumoGas_KG_Dia;
ALTER TABLE valores RENAME COLUMN perdagasemporcento TO PerdaGásEmPorcento; 
ALTER TABLE valores RENAME COLUMN preçodobotijão TO PreçoDoBotijão;

CREATE DATABASE arduino;
USE arduino;

CREATE TABLE dados (
id INT PRIMARY KEY AUTO_INCREMENT,
PocentagemdoVazamento FLOAT
);

INSERT INTO dados VALUE (DEFAULT,34);

SELECT * FROM dados;
