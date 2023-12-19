/* 📌 Operadores Lógicos 
	&& 	And (este símbolo se llama AMPERSAND)
	||	OR
	! 	NOT
*/

/* ⚠️ En el siguiente ejemplo, haremos una comprobación de edad
para vender boletos para un recital donde solo pueden ingresar
mayores de edad o menores con permiso */

// Ejemplo #1 - &&
const nombre = 'Angel';
const edad = 18;
const tieneEntrada = false

const permitirAcceso = edad >= 18 && tieneEntrada;
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #2 - ||
const nombre2 = 'Angel';
const edad2 = 17;
const tieneEntrada2 = true
const tienePermiso = false

const permitirAcceso2 = (edad2 >= 18 && tieneEntrada2) || (tienePermiso && tieneEntrada2);
console.log(nombre2 + ': Acceso permitido al concierto > ' + permitirAcceso2);

// Ejemplo #3 - NOT
const variable = false;
console.log(!variable);