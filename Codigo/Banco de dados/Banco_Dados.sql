	CREATE DATABASE Safeware;
    
    USE Safewae;
    
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
    fkmantencao int,
    Constraint fksensorManutencao foreign key (fkmanutencao)
    references manutencao (idmanutencao)
    );