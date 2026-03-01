const readline = require('readline-sync');

const salarioMinimo = 1300000;
let totalPresupuesto = 0;
let cont60_80 = 0, contMayor80 = 0, contNoAplica = 0;

let cantidadPersonas = parseInt(readline.question("¿Cuántas personas va a registrar? "), 10);

for (let i = 1; i <= cantidadPersonas; i++) {
    console.log(`\n--- PERSONA ${i} ---`);

    let nombre = readline.question("Nombre completo: ");
    let edad = parseInt(readline.question("Edad: "), 10);

    let porcentaje = (edad >= 60 && edad <= 80) ? 12 :
                     (edad > 80) ? 15 : 0;

    let categoria = (edad >= 60 && edad <= 80) ? "Adulto Mayor" :
                    (edad > 80) ? "Adulto Mayor Senior" : "No aplica";

    let subsidio = salarioMinimo * (porcentaje / 100);

    // Contadores
    edad >= 60 && edad <= 80 ? cont60_80++ :
    edad > 80 ? contMayor80++ : contNoAplica++;

    // Acumular presupuesto
    totalPresupuesto += subsidio;

    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad} años`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Porcentaje aplicado: ${porcentaje}%`);
    console.log(`Valor del subsidio: $${subsidio.toLocaleString()}`);
}

// Resumen final
console.log("\n=== INFORME ALCALDÍA DE ARMENIA ===");
console.log(`Total registrados: ${cantidadPersonas}`);
console.log(`Beneficiarios (60-80 años): ${cont60_80}`);
console.log(`Beneficiarios (>80 años): ${contMayor80}`);
console.log(`No aplican: ${contNoAplica}`);
console.log(`Presupuesto total requerido: $${totalPresupuesto.toLocaleString()}`);