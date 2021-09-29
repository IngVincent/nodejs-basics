const math = require('./math.js');
const os = require("os");


console.log(math.divide(1,110));


console.log("la memoria libre del servidor es: ", os.freemem(), "bytes");
console.log("la memoria total del servidor es: ", os.totalmem(), "bytes");
