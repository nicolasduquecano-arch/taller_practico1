// Node.js version of Burger Palace order system
// requires readline-sync package (`npm install readline-sync`)

const readline = require('readline-sync');

let opcion;
let totalCuenta = 0;
let totalCombos = 0;

let contadorCombo1 = 0;
let contadorCombo2 = 0;
let contadorCombo3 = 0;

do {
    console.log("\n====== BURGER PALACE ======");
    console.log("1. Clásica — $15.000");
    console.log("2. Doble Poder — $22.000");
    console.log("3. Mega Fest — $35.000");
    console.log("4. Finalizar pedido");
    opcion = parseInt(
        readline.question("Seleccione una opción (1-4): "),
        10
    );

    let precioCombo = 0;
    let cantidadCombo = 0;
    let subtotal = 0;

    switch (opcion) {
        case 1:
            precioCombo = 15000;
            cantidadCombo = parseInt(readline.question("Cantidad: "), 10);
            subtotal = precioCombo * cantidadCombo;
            contadorCombo1 += cantidadCombo;
            break;

        case 2:
            precioCombo = 22000;
            cantidadCombo = parseInt(readline.question("Cantidad: "), 10);
            subtotal = precioCombo * cantidadCombo;
            contadorCombo2 += cantidadCombo;
            break;

        case 3:
            precioCombo = 35000;
            cantidadCombo = parseInt(readline.question("Cantidad: "), 10);
            subtotal = precioCombo * cantidadCombo;
            contadorCombo3 += cantidadCombo;
            break;

        case 4:
            console.log("Finalizando pedido...");
            break;

        default:
            console.log("Opción no válida");
            continue;
    }

    if (opcion >= 1 && opcion <= 3) {
        totalCuenta += subtotal;
        totalCombos += cantidadCombo;
    }
} while (opcion !== 4);

console.log("\n=== RESUMEN ===");
console.log("Total combos:", totalCombos);
console.log("Cuenta total: $" + totalCuenta);
console.log("Combo clásica vendidos:", contadorCombo1);
console.log("Combo doble vendidos:", contadorCombo2);
console.log("Combo mega vendidos:", contadorCombo3);
