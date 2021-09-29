const fs = require("fs");

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log("datos raw: ",data);
    console.log("datos string: ", data.toString());
});