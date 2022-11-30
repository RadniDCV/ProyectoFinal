create database inmobiliariarossi;


CREATE TABLE tipouser(
    codtipouser int PRIMARY KEY NOT NULL,
    tipouser char(1)
);

CREATE TABLE users(
	codeUser int GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY NOT NULL,
	firstName Char(50) NULL,
	middleName Char(50) NULL,
	lastName Char(30) NULL,
	lastNameM Char(50) NULL,
    picture Char(250) NULL,
    direction Char(250) NULL,
    phone char(10) NULL,
    active Char(1) NULL,
    passw char(200) NULL,
    email char(200) NULL,
    tipousuario int NULL,
    FOREIGN KEY(tipousuario) 
	  REFERENCES tipouser(codtipouser)
);

CREATE TABLE ubicacion(
	codeubicacion int GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY NOT NULL,
	departamento char(50),
    ciudad char(50),
    barrio char(50),
    calle char(250),
    nrocasa char(10),
    imgenes char(250),
    coordenadas char(250),
    detalles char(250)
);

CREATE TABLE inmuebles(
	codeinmueble int GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY NOT NULL,
	ubicacion int ,
    tipoinueble char(50),
    tipooperacion char(50),
    detmet char(50),    
    detmetterreno char(50),    
    dethabitacion char(50),    
    detbanios char(50),
    imagen char(250),
    estado char(1),
    precioalquiler decimal(10,2),
    precioventa decimal(10,2),
    nrocontrato varchar(25),
    codpropietario varchar(10),
    FOREIGN KEY(ubicacion) 
	  REFERENCES ubicacion(codeubicacion)
);

