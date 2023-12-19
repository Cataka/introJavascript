/* 📌 Tipos de datos que podemos guardar en las variables:
	
    string - Cadena de Texto
	number - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

// 📌 Cadena de Texto
const nombre = 'Angel'; // el texto se trabaja con comillas sencillas.
const parrafo = 'Este es un "párrafo"'; //cambiar las comillas para diferenciar el resaltado.
const parrafo2 = "Este es un 'párrafo'"; //cambiar las comillas para diferenciar el resaltado.
const parrafo3 = 'Este es un \'párrafo\''; // diagonal a la derecha indica que el caracter que va después lo escape.

// 📌 Numero
const numero = 4 // valores positivos
const numero2 = -4 // valores negativos
const numero3 = 4.123 // valores con decimales

// 📌 Booleano
const usuarioConectado = true;
const usuarioConectado2 = false;

const mayorQue = 1 > 2;
console.log(mayorQue); // el valor que devuelve es "false", xq 1 no es mayor que 2.

const mayorQue2 = 10 > 2;
console.log(mayorQue2); // el valor que devuelve es "true", xq 10 es mayor que 2.

// 📌 Arrays - Arreglos (nos permite guardar multiples valores)
const arreglo = [1, 10, 5]; //se puede interpretar como una variable que guarda muchos valores
console.log(arreglo);

const arreglo2 = ['texto', 456, true, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo2);

// 📌 Objeto (nos permite guardar información en "parejas", es decir: clave y valor)
const persona = {
	nombre: 'Angel',
	apellido: 'Salinas',
	edad: 47,
	vehiculo: {
		marca: 'Peugeot',
		modelo: 2006,
		color: 'Blanco',
	}
};
console.log(persona.vehiculo.color);

// 📌 Null (crea una variable de valor nulo)
const miVariable = null;
console.log(miVariable);

// 📌 Undefined (crea una variable pero sin definir su valor)
const miVariable2 = undefined;
console.log(miVariable2);
