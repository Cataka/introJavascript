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
console.log("join:", colores.join('-'));

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const letras = ['c', 'b', 'd', 'a'];
console.log ("sort letras:", letras.sort());

const numeros = [3, 2, 4, 1];
console.log ("sort numeros:", numeros.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/
console.log ("📌 reverse: "+ letras.reverse());
console.log ("📌 reverse: "+ numeros.reverse());

const numeros2 = [1, 2, 3, 8, 5];
console.log("reverse mal:", numeros2.reverse());

/* ejemplo de reverse by kilo ---
const resultado = numeros2.sort(function(a, b) {
    return b - a;
});
console.log(resultado);
*/

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log ("📌 concat: "+ arreglo3);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Amarillo');
console.log ("📌 push: "+ colores);

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
colores.pop();
console.log("📌 pop: "+ colores);

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log ("📌 .shift " + dias);
//const diaEliminado = dias.shift();
console.log ("📌 .shift " + dias.shift());

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Carlos');
console.log (" 📌 .unshift: " + dias)

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice (1, 0, 'Rafael', 'Roberto'); // desde la posición 1, borramos 0 elementos, agregamos Rafael y Roberto.
console.log (" 📌 splice: " + amigos);

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melón'];
const frutasFavoritas = frutas.slice(1, 5); //copiar elementos desde la posición 1, hasta antes de la posición 5.-
console.log ("📌 .slice: " + frutasFavoritas);