const arreglo = ['Texto', 456, false, {propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo.length); // para saber la cant. de valores del arreglo

// Ejemplo #1 - Push (agrega un valor al final del arreglo)
const colores = ["rojo", "verde", "azul"]; 
const nuevaLongitud = colores.push("amarillo"); 
console.log(colores); // ["rojo", "verde", "azul", "amarillo"] 
console.log(nuevaLongitud); // 4

// Ejemplo #1 - Pop (elimina el último valor del arreglo)
const frutas = ["manzana", "banana", "naranja"]; 
const ultimaFruta = frutas.pop(); 
console.log(frutas); // ["manzana", "banana"] 
console.log(ultimaFruta); // "naranja"