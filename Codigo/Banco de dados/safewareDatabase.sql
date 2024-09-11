create database safeware;

use safeware;

create table cadastro(
    idUsuario int primary key auto_increment,
    nomeUsuario varchar(30)not null,
    emailUsuario varchar(60) not null,
    senhaUsuario varchar(30) not null,
    permissaoUsuario varchar(15) not null
    constraint chkPermissao check(permissaoUsuario in('Administrador','Cliente'))
);

insert into cadastro values(
    default,
    'Felipe Calace',
    'felipe.caetano@sptech.school',
    'AmoBancoDeDados123',
    'Administrador'
),
(
    default,
    'Felippe Santos',
    'felippe.santos@sptech.school',
    'senha123321',
    'Administrador'
),
(
    default,
    'João Ohi',
    'joao.ohi@sptech.school',
    'urubu100',
    'Administrador'
),
(
    default,
    'Moises Henry',
    'moises.henry@sptech.school',
    'batatinha123',
    'Administrador'
),
(
    default,
    'Tiago Bezerril',
    'tiago.bezerril@sptech.school',
    '12345678',
    'Administrador'
),
(
    default,
    'Érick Jacquin',
    'erickjacquin@gmail.com',
    '#loveFrança',
    'Cliente'
),
(
    default,
    'Henrique Fogaça',
    'fogaca@gmail.com',
    'masterCHEF123',
    'Cliente'
);

select * from cadastro 
    where permissaoUsuario = 'Cliente';

select concat('O usuário ',nomeUsuario,' utiliza o email ',emailUsuario,' e possui permissões de ',permissaoUsuario) from cadastro
    where idUsuario = 6;

select idUsuario,nomeUsuario,emailUsuario from cadastro
    where permissaoUsuario = 'Administrador';

select concat('O id ',idUsuario,' tem a permissão de Administrador') from cadastro
    where permissaoUsuario= 'Administrador';

create table empresa(
    idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(20) not null,
    CNPJ char(14) not null,
    representanteEmpresa varchar(50) 
);

insert into empresa values(
    default,
    'Les Présidents',
    '47011527000185',
    'Érick Jacquin'
),
(
    default,
    'Cão Véio',
    '32165603000130',
    'Henrique Fogaça'
),
(
    default,
    "Mc Donald's",
    '17712224000129',
    'Christopher John Kempczinski'
),
(
    default,
    'KFC',
    '50328176000145',
    'Harland David Sanders'
);

select nomeEmpresa as Empresa, CNPJ as 'CNPJ da Empresa', representanteEmpresa as Representante from empresa
    where idEmpresa >= 1;

select concat('A empresa ',nomeEmpresa,' Tem o CNPJ de número ',CNPJ,'e seu representante é', representanteEmpresa) from empresa
    where idEmpresa >= 1;

create table sensores(
    idSensor int primary key auto_increment,
    empresaInstalada varchar(20) not null,
    estadoAtual varchar(10) not null
    constraint chkEstado check(estadoAtual in('Ativo','Inativo','Manutenção'))
);

insert into sensores values
(default,'Les Présidents','Ativo'),
(default,'Cão Véio','Manutenção'),
(default,"Mc Donald's",'Inativo');

select * from sensores
    where estadoAtual= 'Manutenção';
select empresaInstalada as 'Local de instalção', estadoAtual as Funcionamento from sensores
    where estadoAtual= 'Ativo';

create table dadosSensores(
    idSensor int primary key auto_increment,
    porcentagemGasVazado varchar(5) not null,
    vazamento char(3) not null
        constraint chkVazamento check(vazamento in('Sim','Não')),
    dataHora datetime
    );

insert into dadosSensores values
(default,'55.5','Sim','2020-02-01 15:23:47'),
(default,'0.00','Não','2024-05-23 21:25:12'),
(default,'100','Sim','2023-09-10 14:57:59'),
(default,'1.50','Sim','2024-08-23 23:59:59');

select idSensor as 'Id do Sensor',porcentagemGasVazado as 'Porcentagem de Vazamento' from dadosSensores;
select * from dadosSensores
    where vazamento= 'Não';
select * from dadosSensores
    where vazamento= 'Sim';

create table aproveitamento(
    idCilindro int primary key auto_increment,
    porcentagemDeUso varchar(5) not null,
    porcentagemDesperdicio varchar(5) not null,
    Monitoramento varchar(7) not null
        constraint chkMonitoramento check(Monitoramento in('Ativo','Inativo'))
);

insert into aproveitamento values
(default,'50.0','50.0','Inativo'),
(default,'100.0','0.00','Ativo'),
(default,'93.8','06.2','Ativo'),
(default,'13.6','86.4','Inativo');

select porcentagemDeUso as 'Porcentagem utilizada',porcentagemDesperdicio as 'Porcentagem desperdiçada' from aproveitamento
    where Monitoramento= 'Ativo';
select porcentagemDeUso as 'Porcentagem utilizada',porcentagemDesperdicio as 'Porcentagem desperdiçada' from aproveitamento
    where Monitoramento= 'Inativo';
select concat('Você aproveitou ',porcentagemDeUso,'% do gás total em seu cilindro de id ',idCilindro,' que estava sendo monitorado') from aproveitamento
    where Monitoramento= 'Ativo';