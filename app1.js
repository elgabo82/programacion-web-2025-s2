// 1era forma de importar un módulo
// Creando un objeto que reciba "todo"
/*const objeto = require('./modulo.js'); // Importamos el módulo

console.log(objeto.otroSaludo());
console.log(objeto.saludar("Gabriel"));
console.log(objeto.happyJaz(false));*/

// 2da forma de importar
const { saludar, otroSaludo, happyJaz } = require('./modulo.js');
console.log(saludar("Gabriel"));
console.log(otroSaludo());
console.log(happyJaz(true));