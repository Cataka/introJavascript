/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo (o resto de la división) (me da el 2do resultado de la división)
	++	Aumento
	--	Disminución
*/

// 📌 Operador Suma
const resultado = 10 + 10;
console.log(resultado);

// 📌 Operador Resta
const resultado2 = 10 - 10;
console.log(resultado2);

// 📌 Operador Modulo (se usa para encontrar el residuo de una división.
// Es especialmente útil cuando necesitas determinar si un número es par o impar 
// o para realizar ciclos repetitivos.)
const resultado3 = 600 % 76; // = 68
console.log(resultado3); 
// ⚠️ el resto de la división es 68, porque 76*7 = 532 - 600 == 68

// 📌 Operador Aumento
let numero = 1;
numero++;
console.log(numero);
// ⚠️ dá como resultado 2, porque a numero le aumenta 1

// 📌 Operador Disminución
let numerito = 1;
numerito--;
console.log(numerito);
// ⚠️ dá como resultado 0, porque a numerito le resta 1


/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Multiplica un numero al valor de una variable.
	/=	Divide un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

let numeroo = 600;
numeroo %= 76;
console.log(numeroo);


/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

// const resultado = 5 > 1; // true
// const resultado = 20 <= 20; // true
// const resultado = 10 == 10; // True (Solo compara el valor)
// const resultado = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)

// 📌 Operador Ternario
const resultadito = 7 > 1 ? "El primer número es mayor que el segundo" : "El segundo número es mayor que el primero";
console.log(resultadito);