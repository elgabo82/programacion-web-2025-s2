console.log('Hola mundo, mi primer programa en JS');

for (let i=0; i<10; i++) {
    console.log(i);
}

alert('Hola mundo');
let n1=prompt("Ingresa un nro: ");
let n2=prompt("Ingresa un nro: ");

suma(n1,n2)

function suma(n1, n2){
    r=n1+n2;

    alert('Hola la suma de dos números es: '+r);
}