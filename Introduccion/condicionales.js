/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// 📌 Estructura básica de una condicional
// if (true) {
// Código a ejecutar
// }

// 📌 Ejemplo #1:
const usuario1 = { // creamos un objeto porque queremos agruparle información
    edad: 27,
    pais: 'Mexico',
    ticket: true,
};

if (usuario1.edad >= 18){
    console.log('El usuario es mayor de edad y puede entrar al concierto')
} else {
    console.log('El usuario no puede entrar al concierto porque es menor de edad')
}

// 📌 Ejemplo #2:
const usuario2 = { // creamos un objeto porque queremos agruparle información
    edad: 27,
    pais: 'Mexico',
    ticket: true,
};

if (usuario2.edad >= 18 && usuario2.ticket){ // usuario2.ticket no es necesario poner == true, porque es true o false
    console.log('El usuario es mayor de edad y puede ingresar al concierto')
} else {
    console.log('El usuario no puede ingresar al concierto, es menor de edad o no tiene ticket')
}

// 📌 Ejemplo #3:
const usuario3 = { // creamos un objeto porque queremos agruparle información
    edad: 27,
    pais: 'Argentina',
    ticket: false,
};

if(usuario3.edad >= 18){
    if(usuario3.ticket){
        console.log('📌 El usuario es mayor de edad y tiene ticket');
    } else {
        console.log('El usuario es mayor de edad, pero NO tiene ticket');
    } 
} else {
    console.log('El usuario es menor de edad');
};

// 📌 Ejemplo #4 - elseif:
const usuario4 = { // creamos un objeto porque queremos agruparle información
    edad: 27,
    pais: 'Argentin',
    ticket: false,
};

if(usuario4.pais === 'Argentina'){
    console.log('El usuario es argentino 🇦🇷')
} else if(usuario4.pais === 'Mexico') {
    console.log('El usuario es mexicano 🇲🇽')
} else if(usuario4.pais === 'Colombia') {
    console.log('El usuario es Colombiano 🇨🇴')
} else {
    console.log('⚠️ EL usuario es de otro país')
}