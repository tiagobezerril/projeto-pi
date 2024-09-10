create database monitoramento;
use monitoramento;

create table login_usuario(
idUsuario int primary key auto_increment,
email varchar(45),
senha varchar(45),
cnpj char(14)
);

insert into login_usuario values
	(default, 'luiza.mozart@gmail.com', '@luiza415874#', '39765284918274'),
    (default, 'diogocruyff@outlook.com', 'Diogocruy625366##', '98374658374659'),
    (default, 'maria.silva@gmail.com', '83847477maria', '28374695837462'),
    (default, 'ana.martins@outlook.com', 'anamar#@12', '53748726374857'),
    (default, ' pedro.souza@gmail.com', 'ped847##@souza', '88374637746736');
    
select * from login_usuario;

create table vazamento(
idSensor int primary key auto_increment,
velocidade_vazamento varchar(10),
vazamento_massa varchar(10)
);

insert into vazamento values 
	(default, 5,35),
    (default, 4, 40 ),
    (default, 10, 50),
    (default, 6, 45);
    
select * from vazamento;

create table custos(
idCilindro int primary key auto_increment,
peso varchar(20),
custo_cilindro varchar(20),
qtd_cilindros varchar(20)
);


insert into custos values
	(default, 45, 460, 10),
    (default, 20, 200, 6),
    (default, 40, 420, 20),
    (default, 100, 1000, 2),
    (default, 10, 100, 15);
    
select * from custos;
