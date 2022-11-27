-- DROP DATABASE IF EXISTS Viver_Bem;

CREATE DATABASE IF NOT EXISTS Viver_Bem;
USE Viver_Bem;

CREATE TABLE periodos(
id_periodo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
horario_servico VARCHAR(15)
);

CREATE TABLE tipo_de_equipe(
id_tipo_de_equipe INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_equipe VARCHAR(15)
);

CREATE TABLE colaboradores(
id_colaborador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
email text,
senha VARCHAR(15),
id_periodo INT,
CONSTRAINT fk_colaborador_periodo
FOREIGN KEY(id_periodo)
REFERENCES periodos(id_periodo),
id_tipo_de_equipe INT,
CONSTRAINT fk_colaborador_tipo_de_equipe
FOREIGN KEY (id_tipo_de_equipe)
REFERENCES tipo_de_equipe(id_tipo_de_equipe)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
telefone VARCHAR(15),
id_colaborador INT,
CONSTRAINT fk_cliente_colaborador
FOREIGN KEY (id_colaborador)
REFERENCES colaboradores(id_colaborador)
);

-- inseri em todas as tabelas alguns valores
INSERT INTO periodos(id_periodo,horario_servico) VALUES(1,"Manhã"),(2,"Tarde"),(3,"Manhã"),(4,"Manhã"),(5,"Manhã");

INSERT INTO tipo_de_equipe(nome_equipe) VALUES("Cidade Jardins"),("Jardim Oriente"),("Taguatinga"),("Minas Gerais"),("Goiania");

INSERT INTO colaboradores(nome,email,id_periodo,id_tipo_de_equipe) VALUES
("Brenner Santos","brennerviver@gmail.com",1,1),("Roger Santos","rogerviver@gmail.com",2,2),("Barbara Santos","barbarasantos@gmail.com",3,3),("Gabiel Machado","gabielmachado",4,4),("Rose Lira","roselira@gmail.com",5,5);

INSERT INTO cliente(nome,telefone,id_colaborador) VALUES
("Brenner Pereira","951066",1),("Roger Souza","951516",2),("Barbara Mel","951050",3),("Marcos Assunção","958890",4),("Fabiana Rocha","956632",5);

-- Atualização na tabela clientes/nome de Brenner Para Denner
UPDATE cliente
SET nome = "Denner"
WHERE nome = "Brenner Pereira";

-- Desabilitando a chave extrangeira e  fazendo Exclusão na tabela colaboradores o escolhido foi Roger Santos
set foreign_key_checks= 0;
DELETE FROM colaboradores
WHERE nome = "Rose Lira";

-- selecionei tabela colaboradores visualizei nome e email
SELECT nome,email
FROM colaboradores;

-- Innei periodo com colaborador solicitando a quantidade
SELECT c.nome, c.email, Count(nome) as qts
FROM colaboradores c
INNER JOIN periodos pd
ON pd.id_periodo = c.id_periodo
GROUP BY nome, email
ORDER BY nome asc;
