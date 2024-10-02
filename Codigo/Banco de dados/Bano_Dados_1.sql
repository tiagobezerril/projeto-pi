	CREATE DATABASE Safeware;
    
    USE Safeware;
    
    CREATE TABLE Empresa (
    idEmpresa int primary key auto_increment,
    nome varchar (45),
    cnpj char (11)
    );
    
    CREATE TABLE usuario (
    idUsuario int primary key auto_increment,
    nome varchar (45),
    email varchar (45),
    senhar varchar (11),
    fkEmpresa int,
    constraint fkClienteEmpresa foreign key (fkEmpresa) 
    references Empresa (idEmpresa)
    );
    
    CREATE TABLE manutencao (
    idmanuntecao int primary key auto_increment,
    dtinstalacao date,
    manutencao date,
    status varchar (10),
    fkempresa int,
    constraint fkClienteUsuario foreign key (fkEmpresa)
    references Empresa (idEmpresa)
    );
    
	CREATE TABLE dados (
    idDados int primary key auto_increment,
    dtColeta date,
    porcentagem int,
    fkmanutencao int,
    Constraint fksensorManuntencao foreign key (fkmanutencao)
    references manutencao (idmanuntecao)
    );
    
    desc manutencao;
  
INSERT INTO empresa value
	(default, 'Safeware', 12345678921);
  
INSERT INTO usuario value 
	(default, 'Tiago', 'bezerriltiago@gmail.com', 'ab1234', default);
  
  select * from empresa;
  update usuario set fkempresa = 1
	where idusuario = 1;
    
 SELECT u1.nome as usuario,
		e1.nome as empresa
	FROM usuario as u1
    JOIN empresa as e1
    on e1.idEmpresa = u1.fkEmpresa;
    
SELECT m1.status as Atividade,
		p1.porcentagem as '%'
	FROM manutencao as m1
    JOIN dados as p1
    ON m1.idmanuntecao = p1.fkmanutencao;
    
INSERT INTO manutencao VALUE 
	(default, 2024-16-09, 2024-23-09, null, default) 
    