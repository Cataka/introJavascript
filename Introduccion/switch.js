const usuario = {
    nombre: 'Carlos',
    pais: 'Chile',
};

switch (usuario.pais) {
    case 'Mexico':
        console.log('El usuario es mexicano.');
        break;
    case 'Colombia':
        console.log('El usuario es colombiano.');
        break;
    case 'Argentina':
        console.log('El usuario es argentino.');
        break;
    default:
        console.log('El usuario es de otro país.');
}