const argv = require('./config/yargs').argv;
const color = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


const comando = argv._[0];

switch (comando) {
    case 'listar':
            listarTabla(argv.base, argv.limite);    
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido')
        break;
}
