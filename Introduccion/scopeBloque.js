/* 📌 Block Scope / Alcance de tipo bloque
	- Pertenecen las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

const edad = 18;

if (edad >= 18) {
    const accesoPermitido = true;
    
    if (true) {
        console.log(accesoPermitido);
    }

    const miFuncion = () => {
        console.log(accesoPermitido);
    }
    miFuncion();
}

const accesoPermitido = 'SI'; // definimos una variable y aquí será de Alcance Global
console.log(accesoPermitido); // accedemos a esta variable global.