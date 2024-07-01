let titulos = document.querySelector('h1');

titulos.innerHTML = 'Hora del Desafío';

function botonClicado() {
    alert('El botón fue clicado');
}

function nombreCiudadBrasil() {
    let ciudad = prompt('Ingrese el nombre de una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acordé de tí.`);
}

function alertaAmoJS() {
    alert('Yo amo JavaScript');
}

function sumaNumeros() {
    let numero1 = parseInt(prompt('Ingrese un número: '));
    let numero2 = parseInt(prompt('Ingrese otro número: '));
    let suma = numero1 + numero2;
    alert(`La suma de los números es: ${suma}`);
}