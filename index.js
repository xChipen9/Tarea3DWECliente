const { Pokemon, Move, Tipo } = require('./pokemon');
const { batalla } = require('./mecanicas');

const ascuas = new Move("Ascuas", 40);
const lanzallamas = new Move("Lanzallamas", 90);
const latigoCepa = new Move("Látigo Cepa", 45);
const hojaAfilada = new Move("Hoja Afilada", 55);

const charmander = new Pokemon("Charmander", Tipo.FUEGO, 120, 60, 45, [ascuas, lanzallamas]);
const bulbasaur = new Pokemon("Bulbasaur", Tipo.PLANTA, 130, 55, 50, [latigoCepa, hojaAfilada]);

batalla(charmander, bulbasaur);