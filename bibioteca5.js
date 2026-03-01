const readline = require('readline-sync');

const usuarios = parseInt(readline.question("¿Cuántos usuarios va a ingresar? "), 10);

let totalLibros = 0;
let puntuales = 0;
let retraso = 0;
let totalMultas = 0;

for (let i = 1; i <= usuarios; i++) {
    console.log(`\n--- USUARIO ${i} ---`);
    const nombre = readline.question("Ingrese su nombre: ");

    // mostrar reglas de préstamo
    console.log("Reglas: hasta 7 días sin multa.");
    console.log("Después, $1.500 por día de retraso hasta 15 días.");
    console.log("Si supera 15 días, se cobra una sanción fija de $10.000 adicional.");

    let libros;
    while (true) {
        libros = parseInt(readline.question("Libros (max 3): "), 10);
        if (libros >= 1 && libros <= 3) break;
    }

    let multaUsuario = 0;
    for (let j = 1; j <= libros; j++) {
        console.log(`\nLibro ${j}:`);
        const dias = parseInt(readline.question("  Días prestados: "), 10);
        const diasRetraso = dias > 7 ? dias - 7 : 0;
        let multa = 0;

        if (diasRetraso === 0) {
            console.log("  Entregado dentro del plazo (0 días de retraso)");
            puntuales++;
        } else if (diasRetraso <= 15) {
            multa = diasRetraso * 1500;
            console.log(`  Retraso de ${diasRetraso} días -> multa $${multa}`);
            retraso++;
        } else {
            multa = diasRetraso * 1500 + 10000;
            console.log(`  Retraso de ${diasRetraso} días -> multa $${multa} (incluye sanción extra)`);
            retraso++;
        }

        multaUsuario += multa;
        totalLibros++;
    }

    const estado = multaUsuario === 0 ? "PUNTUAL" : "CON RETRASO";
    console.log(`Usuario ${nombre}: multa $${multaUsuario} - ${estado}`);

    totalMultas += multaUsuario;
}

console.log("\n=== RESUMEN ===");
console.log("Usuarios:", usuarios);
console.log("Libros:", totalLibros);
console.log("Puntuales:", puntuales);
console.log("Con retraso:", retraso);
console.log("Total multas: $" + totalMultas);