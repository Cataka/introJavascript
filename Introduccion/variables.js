/*

Las variables son espacios en memoria donde podemos guardar datos:

    string      - Cadena de Texto
    number      - Numero
    boolean     - Booleano (verdadero o falso)
    object      - Objeto
    function    - Funciones

	null        - (cuando a la variable le queremos dar un) Valor nulo
	undefined   - (la variable existe pero tiene un) Valor sin definir

*/

var edad = null; // las variables tienen nombres únicos
let nombre = "Angel"; // SI nos permite cambiar el valor de la variable
const correo = "angel@salinas.com"; // NO permite cambiar el valor de la variable

// si tenemos 3 variables //
var telefono;
var pais;
var id;

// podemos escribirlas en una sola línea de código:
var telefono, pais, id; // así de esta manera ahorramos código
console.log(telefono) // con un valor en consola "undefined"

// podemos asignarle un valor mediante la llamada a la variable:
telefono = 123456789;
console.log (telefono); // con un valor en consola "123456789"

// en las variables también se pueden hacer operaciones aritméticas
const resultado = 4+4;
console.log (resultado);

// también podemos almacenar cadenas de texto

const nombre1 = "Angel "; //agregué un espacio para que quede bien escrito completo
const nombre2 = "Eduardo"; 
const nombreCompleto = nombre1 + nombre2;
console.log (nombreCompleto);

// también podemos cambiar el tipo de dato almacenado en la varible
let miVariable = "texto"; // asignamos un tipo de dato "cadena de texto"
miVariable = 7; // y lo cambiamos al tipo de dato "numérico"
console.log (miVariable);