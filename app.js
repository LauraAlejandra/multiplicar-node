//const fs = require('express');
//const fs = require('./fs');

const argv = require('./multiplicar/config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let argv2 = process.argv;
//console.log(argv.limite);
//console.log(argv2);

//console.log(module);
//console.log(process.argv);
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]; //separarlo por signo de igual
//console.log(base);