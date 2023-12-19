const boleto = 'vip';


/* if (boleto === 'vip'){
    condigoAcceso = 'VIP-123-456';
} else {
    condigoAcceso = 'REGULAR-654-321';
}
console.log(condigoAcceso);
*/

let condigoAcceso = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR-654-321';
console.log(condigoAcceso)

let condigoAcceso = (boleto === 'vip') ? console.log('Tu acceso es VIP') : console.log('Tu acceso es REGULAR');