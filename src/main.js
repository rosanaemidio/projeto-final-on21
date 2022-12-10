const adocao= require('./Adoption/adocao');
const Adotante = require('./Adotante/adotante');
const Gato = require('./Animals/gato');
const Cao = require('./Animals/cao');

const adotante1 = new Adotante(1,"Noelia", 33, "Programadora", "Apartamento");
const adotante2 = new Adotante(2,"Ben", 16, "Estudante", "Apartamento" );
const adotante3 = new Adotante(3,'Maria Julia', 26, 'Psicóloga', 'Casa' );
const adotante4 = new Adotante(4,'Antônio', 39, 'Engenheiro', 'Casa' );
const adotante5 = new Adotante(5,'Melissa', 55, 'Empreendedora', 'Apartamento' );

const gato1 = new Gato(1,"Chico", "7 anos","SRD","Laranja", "macho");
const gato2 = new Gato(2,"Adora", "1 ano","Siames","Cinza","fêmea");
const gato3 = new Gato(3,"Jubileu", "6 meses","Frajola","preto e branco","macho");
const gato4 = new Gato(4,"Théo", "2 meses","SRD","Preto","macho");
const gato5 = new Gato(5,"Ravena", "3 anos","Malhado","cinza, preto e marrom","fêmea");

const cao1 = new Cao(1,'Faisca', '2 anos', 'Caramelo', 'amarelo', 'macho' )
const cao2 = new Cao(2,'Rony', '3 meses', 'Golden', 'amarelo', 'macho' )
const cao3 = new Cao(3,'Mel', '5 anos', 'SRD', 'preto', 'fêmea' )
const cao4 = new Cao(4,'Trovoada', '4 meses', 'SRD', 'branco', 'macho' )
const cao5 = new Cao(5,'Teddy', '6 meses', 'SRD', 'branco e preto', 'macho' )

adocao()