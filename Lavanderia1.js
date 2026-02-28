const costo_hora = 5000;
let acumulador_ingresos = 0;
let contador_descuentos = 0;

let cantidad_clientes=3;
for (let i = 1; i <= cantidad_clientes; i++) {
    let nombre_cliente=prompt(`Ingrese el nombre del cliente`);
    let horas_servicio=parseInt(prompt(`Ingrese la cantidad de horas del servicio`));
    let costo_total= horas_servicio * costo_hora;
    let contador_descuentos=0;

    if (horas_servicio > 12) {
        contador_descuentos=costo_total * 0.30;
        contador_descuentos++;
    } 
    let total_pagar =costo_total - contador_descuentos;
    let mensaje = horas_servicio > 12 ? "descuento aplicado" : "no se aplicó descuento";
     console.log(`--- CLIENTE ${i}: ${nombreCliente} ---`);
    console.log("Horas:", horasAlquiler);
    console.log("Subtotal: $" + costoTotal);
    console.log("Descuento: $" + descuento + " — " + mensaje);
    console.log("Total a pagar: $" + totalPagar);

    acumuladorIngresos += totalPagar;
}

console.log("=== RESUMEN DEL DÍA ===");
console.log("Clientes atendidos:", cantidadClientes);
console.log("Ingreso total: $" + acumuladorIngresos);
console.log("Clientes con descuento:", contadorDescuentos);