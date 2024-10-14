const readline = require('readline-sync');

function turnoDeBatalla(jugador, oponente) {
    console.log(`Es tu turno, ${jugador.nombre}!`);
    console.log("¿Que quieres hacer?");
    console.log("1. Atacar");
    console.log("2. Curar");

    const eleccion = readline.question("Elije 1 o 2: ");

    if (eleccion === "1") {
        console.log("Escoge un movimiento:");
        jugador.movimientos.forEach((movimiento, index) => {
            console.log(`${index + 1}. ${movimiento.nombre} (Daño: ${movimiento.daño})`);
        });
        const elegirMovimiento = parseInt(readline.question("Elije un numero de movimiento: "));
        if (elegirMovimiento > 0 && elegirMovimiento <= jugador.movimientos.length) {
            const movimientoSeleccionado = jugador.movimientos[elegirMovimiento - 1];
            jugador.atacar(movimientoSeleccionado, oponente);
        } else {
            console.log("¡Movimiento inválido!");
        }
    } else if (eleccion === "2") {
        jugador.heal();
    }

    if (oponente.hpActual > 0) {
        console.log(`${oponente.nombre}, ¡es tu turno!`);
        const accionAleatoria = Math.random() > 0.5 ? "Atacar" : "Curar";
        if (accionAleatoria === "Atacar") {
            const movimientoAleatorio = oponente.movimientos[Math.floor(Math.random() * oponente.movimientos.length)];
            oponente.atacar(movimientoAleatorio, jugador);
        } else {
            oponente.heal();
        }
    }

    console.log(`\n${jugador.nombre} HP: ${jugador.hpActual}/${jugador.hpMax}`);
    console.log(`${oponente.nombre} HP: ${oponente.hpActual}/${oponente.hpMax}`);
}

function batalla(jugador, oponente) {
    console.log(`¡Apareció un ${oponente.nombre} salvaje!`);
    while (jugador.hpActual > 0 && oponente.hpActual > 0) {
        turnoDeBatalla(jugador, oponente);

        if (jugador.hpActual <= 0) {
            console.log(`¡${jugador.nombre} se ha desmayado! Has perdido...`);
            break;
        }

        if (oponente.hpActual <= 0) {
            console.log(`¡${oponente.nombre} se ha desmayado! Has ganado...!`);
            break;
        }
    }
}

module.exports = { batalla };