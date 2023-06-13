create table representante (
	id serial primary key,
	nome VARCHAR(100) NOT NULL,
	data_nasc VARCHAR(12) NOT NULL,
	sexo CHAR(1) NOT NULL,
	marcas varchar(15),
	cidades varchar(250),
	estado varchar(20)
)

INSERT INTO representante(nome, data_nasc, sexo, marcas, cidades, estado) VALUES
('João da Silva', '12/05/1985', 'M', 'A,C,E', 'Franca,Restinga,Ituverava', 'SP'),
('Mariana Oliveira', '28/09/1990', 'F', 'B,D', 'Franca,Ipuã,Rifaina', 'SP'),
('Pedro Henrique Santos', '03/07/1987', 'M', 'A,C,E', 'Franca,Patrocínio Paulista,Cristais Paulista', 'SP'),
('Camila Rodrigues', '15/11/1995', 'F', 'B,D', 'Franca,Ribeirão Corrente,Jeriquara', 'SP'),
('Lucas Ferreira', '09/03/1988', 'M', 'A,B,C,E', 'Franca,São José da Bela Vista,Claraval', 'SP,MG'),
('Amanda Costa', '22/07/1992', 'F', 'D,E', 'Franca,Ribeirão Preto,Patrocínio Paulista', 'SP'),
('Gustavo Almeida', '05/09/1986', 'M', 'A,B,C', 'Franca,Cristais Paulista,Restinga', 'SP'),
('Isabela Santos', '17/02/1991', 'F', 'B,D,E', 'Franca,Itirapuã,Ipuã', 'SP'),
('Rafael Lima', '30/06/1989', 'M', 'A,C,E', 'Franca,Ribeirão Preto,São José da Bela Vista', 'SP'),
('Juliana Ferreira', '14/10/1993', 'F', 'B,D', 'Franca,Jeriquara,Ipuã', 'SP'),
('Fernando Souza', '08/04/1987', 'M', 'A,C,E', 'Franca,Ituverava,Rifaina', 'SP'),
('Carolina Oliveira', '21/08/1991', 'F', 'B,D', 'Franca,Cristais Paulista,Claraval', 'SP,MG'),
('Marcos Silva', '04/02/1986', 'M', 'A,B,C,E', 'Franca,Patrocínio Paulista,Restinga', 'SP'),
('Bianca Costa', '18/06/1990', 'F', 'D,E', 'Franca,Ribeirão Corrente,Itirapuã', 'SP'),
('Matheus Almeida', '01/10/1984', 'M', 'A,B,C', 'Franca,São José da Bela Vista,Ribeirão Preto', 'SP'),
('Luana Santos', '13/02/1989', 'F', 'B,D,E', 'Franca,Ipuã,Cristais Paulista', 'SP'),
('Henrique Lima', '26/06/1985', 'M', 'A,C,E', 'Franca,Ribeirão Corrente,Claraval', 'SP,MG'),
('Aline Ferreira', '10/10/1989', 'F', 'B,D', 'Franca,Patrocínio Paulista,Itirapuã', 'SP'),
('José Souza', '03/04/1983', 'M', 'A,C,E', 'Franca,Restinga,Jeriquara', 'SP'),
('Larissa Oliveira', '16/08/1987', 'F', 'B,D', 'Franca,Ipuã,São José da Bela Vista', 'SP');
	
