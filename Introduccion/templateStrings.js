const nombre = 'Carlos Arturo';
const edad = 27;
const pais = 'Mexico';

console.log('La persona es ' + nombre + ' tiene ' + edad + ' y es de ' + pais);
// trabajar con esta cadena de texto es muy complicado

// 📌 Template Strings
console.log(`La persona es ${nombre} tiene ${edad} y es de ${pais}`);


// También se pueden crear cadenas multilineas:
const multilinea = `
Línea 1
Línea 2
Línea 3
`;

console.log(multilinea);
/*
Imprime:
Línea 1
Línea 2
Línea 3
*/