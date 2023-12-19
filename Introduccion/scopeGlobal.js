/* 📌 Global Scope o Variables Globales:
- Son Variables declaradas fuera de una función.
- Podemos acceder a ellas desde cualquier parte del código.
- Podemos usar const, let y var.
*/

var nombre = 'Carlos';
console.log(nombre);

const saludo = () => {console.log('Hola ' + nombre);

nombre = 'Arturo';
console.log('El nuevo nombre es ' + nombre);

}

saludo();