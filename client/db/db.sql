-- Active: 1706295515506@@localhost@3306@cakestore

create DATABASE cakestore;
use database cakestore;

create table Usuario(
    idUsuario int PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(30),
    email VARCHAR(100),
    Telefone char(11),
    senha VARCHAR(1000)
);

create table Produto(
    idProduto int PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(30),
    preco DOUBLE(5,2),
    Descricao VARCHAR(100),
    id_usuario int,
    Foreign Key (id_usuario) REFERENCES Usuario(idUsuario)
);

create table Carrinho_Usuario (
    idCarrinho int PRIMARY KEY AUTO_INCREMENT,
    id_usuario int,
    Foreign Key (id_usuario) REFERENCES Usuario(idUsuario)
);
drop tables Itens_Carrinho;
create table Itens_Carrinho(
    idItens_Carrinho int PRIMARY KEY AUTO_INCREMENT,
    id_carrinho int,
    id_produto int,
    quantidade int,
    Foreign Key (id_carrinho) REFERENCES Carrinho_Usuario(idCarrinho),
    Foreign Key (id_produto) REFERENCES Produto(idProduto)
);


show tables;