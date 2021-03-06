const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        console.log('==============='.green);
        console.log(`TABLA DEL ${base}`.green);
        console.log('==============='.green);

        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += (`${base} * ${i} = ${base*i}\n`);

        }

        console.log(data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }`)
        });
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }


        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += (`${base} * ${i} = ${base*i}\n`);

        }

        fs.writeFile(`archivos-tablas/tabla_${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`)





        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}