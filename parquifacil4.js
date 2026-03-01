const readline = require('readline-sync');

let opcion = 0;
let motos = 0, carros = 0, camionetas = 0;
let ingresoTotal = 0, sumaHoras = 0, totalVehiculos = 0;
while (opcion !== 2) {
     console.log("\n1. Registrar vehículo");
    console.log("2. Cerrar jornada");
    opcion = parseInt(readline.question("Opcion: "), 10);
    if (opcion === 1) {
        let tipoVehiculo = parseInt(readline.question("Tipo de vehículo (1. Moto, 2. Carro, 3. Camioneta): "), 10);
        let horasEstacionado = parseInt(readline.question("Horas estacionado: "), 10);
        let tarifa = 0;
        let nombretipo = "";
        switch (tipoVehiculo) {
            case 1:
                tarifa = 2000;
                nombretipo = "Moto";
                motos++;
                break;
            case 2:
                tarifa = 5000;
                nombretipo = "Carro";
                carros++;
                break;  
            case 3:
                tarifa = 8000;
                nombretipo = "Camioneta";
                camionetas++;
                break;
            default:
                console.log("Tipo de vehículo no válido");
                continue;
        }
        let subtotal = tarifa * horasEstacionado;
        let descuento = horasEstacionado > 5 ? subtotal * 0.10 : 0;
        let totalPagar = subtotal - descuento;
        let tipotarifa = horasEstacionado > 5 ? "con descuento" : "sin descuento";
        console.log("\n--- VEHÍCULO REGISTRADO ---");
        console.log("Tipo:", nombretipo);
        console.log("Horas:", horasEstacionado);
        console.log("Subtotal: $" + subtotal);
        console.log("Descuento: $" + descuento);
        console.log(tipotarifa);
        console.log("Total: $" + totalPagar);

        ingresoTotal += totalPagar;
        sumaHoras += horasEstacionado;
        totalVehiculos++;
    }
        else if (opcion === 2) {
        console.log("\n=== RESUMEN DE LA JORNADA ===");
        console.log("Total vehículos registrados:", totalVehiculos);
        console.log("Motos:", motos);
        console.log("Carros:", carros);
        console.log("Camionetas:", camionetas);
        console.log("Ingreso total: $" + ingresoTotal);
        console.log("Promedio de horas por vehículo: " + (sumaHoras / totalVehiculos).toFixed(2));
    }
        else {
        console.log("Opción no válida");
    }
}