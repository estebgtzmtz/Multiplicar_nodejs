const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite=10) =>{
    console.log('================'.green);
    console.log(`  Tabla de ${base}`.white);
    console.log('================'.red);
    for(let i = 1; i<= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

const crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject (`El valor introducido ${base} no es un numero`);
            return;
        }

        let data='';

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/Tabla${base}al${limite}.txt`, data, (err)=>{
            if(err)
                reject (err);
            else
                resolve(`tabla${base}al${limite}.txt`.red);
        });       
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}