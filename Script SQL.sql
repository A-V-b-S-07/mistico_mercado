create database mercadoMistico;

use mercadoMistico;

create table usuarios (
	id int primary key auto_increment not null,
    nome varchar(245) not null,
    email varchar(245) not null,
    senha varchar(245) not null,
    status enum ("admin", "user")
);
select * FROM usuarios;
create table produtos (
	id int primary key auto_increment not null,
    nome varchar(245) not null,
    preco float,
    quantidade int
);
select * FROM produtos;
create table compras ( 
	id int primary key auto_increment not null,
    valor float,
	
    foreign key (id_usuarios) references usuarios (id_usuarios),
    foreign key (id_produtos) references produtos (id_produtos)
);

