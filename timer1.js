function sumar(a ,b, c, d) {
    console.log(a+b+c+d);
}

setTimeout(mostrarTexto, 2000, "Uso de timers");
setTimeout(sumar, 5000, 5, 10, 4, 6);

alert('Esto es otro ejemplo');


function mostrarTexto(cadena) {
    // Template (plantilla)
    console.log(`Hola: ${cadena}`)
    alert(`Hola: ${cadena}`);
}

