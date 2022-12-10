const adocao = require('./controller/adocao');
const Adotante = require('./model/Adotante/adotante');
const Gato = require('./services/Animais/gato');
const Cao = require('./services/Animais/cao');

const adotante1 = new Adotante("Noelia", 33, "Programadora", "Apartamento");
const adotante2 = new Adotante("Ben", 16, "Estudante", "Apartamento" );
const adotante3 = new Adotante('Maria Julia', 26, 'Psicóloga', 'Casa' );
const adotante4 = new Adotante('Antônio', 39, 'Engenheiro', 'Casa' );
const adotante5 = new Adotante('Melissa', 55, 'Empreendedora', 'Apartamento' );

const gato1 = new Gato("Chico", "7 anos","SRD","Laranja", "macho");
const gato2 = new Gato("Adora", "1 ano","Siames","Cinza","fêmea");
const gato3 = new Gato("Jubileu", "6 meses","Frajola","preto e branco","macho");
const gato4 = new Gato("Théo", "2 meses","SRD","Preto","macho");
const gato5 = new Gato("Ravena", "3 anos","Malhado","cinza, preto e marrom","fêmea");

const cao1 = new Cao("Faisca", "2 anos", "Caramelo", "amarelo", "macho" );
const cao2 = new Cao("Rony", "3 meses", "Golden", "amarelo", "macho" );
const cao3 = new Cao("Mel", "5 anos", "SRD", "preto", "fêmea" );
const cao4 = new Cao("Trovoada", "4 meses", "SRD", "branco", "macho" );
const cao5 = new Cao("Teddy", "6 meses", "SRD", "branco e preto", "macho");

adocao();