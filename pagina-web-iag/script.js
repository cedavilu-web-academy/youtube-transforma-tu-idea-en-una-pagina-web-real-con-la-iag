function areaSuperficie(){
    const lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
    return Math.pow(lado, 2);

}
function sumar(){
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    return num1 + num2;
}

sumar();

function calcularPromedio(calificaciones) {
    const total = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = total / calificaciones.length;
    return promedio;
}

// Ejemplo de uso
const calificaciones = [8, 7, 9, 10, 6];
const promedio = calcularPromedio(calificaciones);
console.log("El promedio de las calificaciones es:", promedio);