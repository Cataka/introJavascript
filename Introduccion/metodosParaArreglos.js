const colores = ['Rojo', 'Verde', 'Azul'];

/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/
document.body.innerHTML = colores.toString(); //nos permite mostrar en el body del html los elementos del arreglo.
console.log(colores.toString()); //nos permite mostrar en consola los elementos del arreglo.

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/
console.log(colores.join('- - -'));

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const letras = ['c', 'b', 'd', 'a'];
console.log (letras.sort());

const numeros = [3, 2, 4, 1];
console.log (numeros.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/
console.log (letras.reverse());
console.log (numeros.reverse());

/*
const numeros = [1, 2, 3, 8, 5];
console.log(numeros.reverse());
*/
