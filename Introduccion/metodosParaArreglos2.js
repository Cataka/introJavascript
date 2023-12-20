/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	*** Si no hay elemento nos retorna -1 ***
*/
const nombres = ['Carlos', 'Damián', 'Alberto', 'Martín', 'Ricardo', 'Alberto', 'César', 'Leandro'];
console.log ("📌 indexOf: " + nombres.indexOf ('Alberto'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
    *** Si no hay elemento nos retorna -1 ***
*/
console.log ("📌 lastIndexOf: " + nombres.lastIndexOf ('Angel'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/

nombres.forEach((nombre, index) => { //con index saco el indice de cada elemento
    console.log("📌 forEach: " + `Hola ${nombre} y tiene el índice: ${index}`);
});

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
const resultado = nombres.find( (nombre) => {
    if (nombre[0] === 'M') {
        return nombre;
    }
});
console.log("📌 find: " + resultado);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/
const nombresMayusculas = nombres.map( (nombre) => {
    return nombre.toUpperCase();
});
console.log(nombresMayusculas);

// *** Ejemplo en una función de tipo flecha acortada ***
// const nombresMayusculas = nombres.map( (nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
const nombres5letras = nombres.filter( (nombre) => {
    if (nombre.length === 5) {
        return nombre;
    }
});
console.log(nombres5letras);

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
console.log("📌 includes: " + nombres.includes ('Julio')); //xq Julio no se encuentra en el arreglo.-

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
