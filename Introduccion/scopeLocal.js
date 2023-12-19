/* 📌 Local Scope o Variables Locales:
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
		console.log(numero);
	};
	funcionAnidada();

};
obtenerNumeroLetras('Romualda');
//console.log(numero); // si aquí intentamos acceder a la variable fuera de la función nos dará error
// porque está definita dentro de la función, por eso se llama localScope o variable local.

// La función anidada puede ser acceder a las variables de la función (principal) declarada entre llaves {}