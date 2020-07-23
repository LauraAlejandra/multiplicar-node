//requireds
const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite) => {
    console.log('=================='.green);
    console.log(`tabla de ${base}`.green);
    console.log(`==================`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = `, base * i);
    }
}

//module.exports.crearArchivo otra forma de hacerlo 
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base}-al-${limite} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}