function saludar(nombre){
    return `Hola ${nombre}`;
}

function holamundo() {
    return '¡El típico hola mundo!';
}

function esFelizJazmina(estadoAnimo) {
    if (estadoAnimo==true){
        return "Jazmina está feliz...";
    }

    if (estadoAnimo==false) {
        return "Estoy triste... y amargada =(";
    }
}
module.exports = {
    saludar: saludar,
    otroSaludo: holamundo,
    happyJaz: esFelizJazmina
}