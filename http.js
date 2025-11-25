// Módulo http
const http = require('http');

const servidor = http.createServer((req, res)=>{
    console.log("Solicitud nueva.");
    res.end('Hola mundo, nuestro primer servidor');
});

const SRV_PUERTO=3000;

const URL="http://localhost";
// Función "flecha", Arrow function, lambda (función anónima)
servidor.listen(SRV_PUERTO, ()=>{
    console.log("Servidor operativo");
    console.log(`Funcionando en la URL: ${URL}:${SRV_PUERTO}`);
});