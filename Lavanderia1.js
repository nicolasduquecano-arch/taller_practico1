

const readlineSync = require('readline-sync');

const costoHora = 5000;
let acumuladorIngresos = 0;
let contadorDescuentos = 0;

const cantidadClientes = 3;
for (let i = 1; i <= cantidadClientes; i++) {
    const nombreCliente = readlineSync.question('Ingrese el nombre del cliente: ');
    const horasServicio = parseInt(
        readlineSync.question('Ingrese la cantidad de horas del servicio: '),
        10
    );

    const costoTotal = horasServicio * costoHora;
    let descuento = 0;

    if (horasServicio > 12) {
        descuento = costoTotal * 0.30;
        contadorDescuentos++;
    }

    const totalPagar = costoTotal - descuento;
    const mensaje = horasServicio > 12 ? 'descuento aplicado' : 'Para obtener descuento, el servicio debe ser mayor a 12 horas';

    console.log(`--- CLIENTE ${i}: ${nombreCliente} ---`);
    console.log('Horas:', horasServicio);
    console.log('Subtotal: $' + costoTotal);
    console.log('Descuento: $' + descuento + ' — ' + mensaje);
    console.log('Total a pagar: $' + totalPagar);

    acumuladorIngresos += totalPagar;
}

console.log('=== RESUMEN DEL DÍA ===');
console.log('Clientes atendidos:', cantidadClientes);
console.log('Ingreso total: $' + acumuladorIngresos);
console.log('Clientes con descuento:', contadorDescuentos);